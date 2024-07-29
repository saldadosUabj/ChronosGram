from fastapi import FastAPI, HTTPException
from typing import Optional
from firebaseadm import FirebaseAdm
from RedeNeural import RedeNeural
from RedeAdapter import RedeAdapter
from tarefas import Tarefa

app = FastAPI()
firebase_adm = FirebaseAdm()
rede_neural = RedeNeural("ModeloIa")
banco = RedeAdapter()


@app.post("/users/")
def create_user(nome: str, turno_livre: str, tipo: str, email: str, senha: str, username: str):
    user_data = {
        "nome": nome,
        "turno_livre": turno_livre,
        "tipo": tipo,
        "email": email,
        "senha": senha,
        "username": username
    }
    user_id = firebase_adm.add_user(user_data)
    return {"id": user_id, **user_data}

@app.get("/users/{user_id}")
def read_user(user_id: str):
    user_data = firebase_adm.get_user(user_id)
    if not user_data:
        raise HTTPException(status_code=404, detail="User not found")
    return user_data

@app.put("/users/{user_id}")
def update_user(
    user_id: str,
    nome: Optional[str] = None,
    turno_livre: Optional[str] = None,
    tipo: Optional[str] = None,
    email: Optional[str] = None,
    senha: Optional[str] = None,
    username: Optional[str] = None
):
    user_data = {
        "nome": nome,
        "turno_livre": turno_livre,
        "tipo": tipo,
        "email": email,
        "senha": senha,
        "username": username
    }

    print("Received data for update:", user_data)  # Log dos dados recebidos para atualização
    
    # Remove os campos que são None ou vazios
    user_data = {k: v for k, v in user_data.items() if v not in [None, ""]}

    print("Filtered data for update:", user_data)  # Log dos dados filtrados

    # Verifica se user_data não está vazio antes de atualizar
    if not user_data:
        raise HTTPException(status_code=400, detail="Nenhum dado para atualizar")

    # Atualiza o usuário no Firebase
    firebase_adm.update_user(user_id, user_data)
    
    return {"id": user_id, **user_data}

@app.delete("/users/{user_id}")
def delete_user(user_id: str):
    user_data = firebase_adm.get_user(user_id)
    if not user_data:
        raise HTTPException(status_code=404, detail="User not found")
    firebase_adm.delete_user(user_id)
    return user_data

@app.post("/tarefas/")
def create_tarefa(meta: str, data_meta: str, nome: str, status: str, assunto: str,
                  material_estudo: str, materia: str, tempo_ate_meta: str, tipo_material: str,
                  nota: str, tempo_estudado: str, indice_facilidade_disciplina: str,
                  recomendacoes: str, desgastes: str, saida: str):
    tarefa_data = {
        "meta": meta,
        "data_meta": data_meta,
        "nome": nome,
        "status": status,
        "assunto": assunto,
        "material_estudo": material_estudo,
        "materia": materia,
        "tempo_ate_meta": tempo_ate_meta,
        "tipo_material": tipo_material,
        "nota": nota,
        "tempo_estudado": tempo_estudado,
        "indice_facilidade_disciplina": indice_facilidade_disciplina,
        "recomendacoes": recomendacoes,
        "desgastes": desgastes,
        "saida": saida
    }
    tarefa_id = firebase_adm.add_tarefa(tarefa_data)
    return {"id": tarefa_id, **tarefa_data}

@app.get("/tarefas/{tarefa_id}")
def read_tarefa(tarefa_id: str):
    tarefa_data = firebase_adm.get_tarefa(tarefa_id)
    if not tarefa_data:
        raise HTTPException(status_code=404, detail="Tarefa not found")
    return tarefa_data

@app.put("/tarefas/{tarefa_id}")
def update_tarefa(tarefa_id: str, meta: str, data_meta: str, nome: str, status: str, assunto: str,
                  material_estudo: str, materia: str, tempo_ate_meta: str, tipo_material: str,
                  nota: str, tempo_estudado: str, indice_facilidade_disciplina: str,
                  recomendacoes: str, desgastes: str, saida: str):
    tarefa_data = {
        "meta": meta,
        "data_meta": data_meta,
        "nome": nome,
        "status": status,
        "assunto": assunto,
        "material_estudo": material_estudo,
        "materia": materia,
        "tempo_ate_meta": tempo_ate_meta,
        "tipo_material": tipo_material,
        "nota": nota,
        "tempo_estudado": tempo_estudado,
        "indice_facilidade_disciplina": indice_facilidade_disciplina,
        "recomendacoes": recomendacoes,
        "desgastes": desgastes,
        "saida": saida
    }
    firebase_adm.update_tarefa(tarefa_id, tarefa_data)
    return {"id": tarefa_id, **tarefa_data}

@app.delete("/tarefas/{tarefa_id}")
def delete_tarefa(tarefa_id: str):
    tarefa_data = firebase_adm.get_tarefa(tarefa_id)
    if not tarefa_data:
        raise HTTPException(status_code=404, detail="Tarefa not found")
    firebase_adm.delete_tarefa(tarefa_id)
    return tarefa_data

@app.post("/redeNeural")
def insert_neural_data(dados:Tarefa):
     banco.insert_task(dados)

@app.get("/redeNeural/{meta}/{dia}/{mes}/{ano}")
def get_neural_data(meta:str , dia:str , mes:str, ano:str):
    data_entrega = f"{dia}/{mes}/{ano}"
    return banco.get_best_task(meta,data_entrega) 

@app.get("/redeNeural")
def update_dados():
    return rede_neural.update_rede()


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
