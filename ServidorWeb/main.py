from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI()

class User(BaseModel):
    id: int
    nome: str
    turno_livre: str
    email: str
    senha: str

class Tarefa(BaseModel):
    id: int  # Certifique-se de incluir o campo 'id'
    meta: str
    data_meta: str
    nome: str
    status: int
    assunto: str
    material_estudo: str
    materia: str
    tempo_ate_meta: int
    tempo_livre_estudo: int
    tipo_material: int
    nota: int
    tempo_estudado: int
    indice_facilidade_disciplina: int
    recomendacoes: int
    desgastes: int
    saida: float

class UserUpdate(BaseModel):
    nome: str
    turno_livre: str
    email: str
    senha: str

class TarefaUpdate(BaseModel):
    meta: str
    data_meta: str
    nome: str
    status: int
    assunto: str
    material_estudo: str
    materia: str
    tempo_ate_meta: int
    tempo_livre_estudo: int
    tipo_material: int
    nota: int
    tempo_estudado: int
    indice_facilidade_disciplina: int
    recomendacoes: int
    desgastes: int
    saida: float
    
    
fake_users_db = [
    {"id": 1, "nome": "User One", "turno_livre": "manhã", "email": "userone@example.com", "senha": "password1"},
    {"id": 2, "nome": "User Two", "turno_livre": "tarde", "email": "usertwo@example.com", "senha": "password2"},
]

fake_tarefas_db = [
    {"id": 1, "meta": "Complete project", "data_meta": "2024-06-30", "nome": "Project Work", "status": 1,
     "assunto": "Development", "material_estudo": "Books", "materia": "CS", "tempo_ate_meta": 10,
     "tempo_livre_estudo": 2, "tipo_material": 1, "nota": 5, "tempo_estudado": 3,
     "indice_facilidade_disciplina": 4, "recomendacoes": 2, "desgastes": 1, "saida": 95.5}
]
    
@app.post("/users/", response_model=User)
def create_user(user: User):
    fake_users_db.append(user.dict())
    return user

@app.get("/users/", response_model=List[User])
def read_users():
    return fake_users_db

@app.get("/users/{user_id}", response_model=User)
def read_user(user_id: int):
    user = next((u for u in fake_users_db if u["id"] == user_id), None)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@app.put("/users/{user_id}", response_model=User)
def update_user(user_id: int, user_update: UserUpdate):
    user = next((u for u in fake_users_db if u["id"] == user_id), None)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    user.update(user_update.dict())
    return user

@app.delete("/users/{user_id}", response_model=User)
def delete_user(user_id: int):
    user = next((u for u in fake_users_db if u["id"] == user_id), None)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    fake_users_db.remove(user)
    return user

@app.post("/tarefas/", response_model=Tarefa)
def create_tarefa(tarefa: Tarefa):
    fake_tarefas_db.append(tarefa.dict())
    return tarefa

@app.get("/tarefas/", response_model=List[Tarefa])
def read_tarefas():
    return fake_tarefas_db

@app.get("/tarefas/{tarefa_id}", response_model=Tarefa)
def read_tarefa(tarefa_id: int):
    tarefa = next((t for t in fake_tarefas_db if t["id"] == tarefa_id), None)
    if tarefa is None:
        raise HTTPException(status_code=404, detail="Tarefa not found")
    return tarefa

@app.put("/tarefas/{tarefa_id}", response_model=Tarefa)
def update_tarefa(tarefa_id: int, tarefa_update: TarefaUpdate):
    tarefa = next((t for t in fake_tarefas_db if t["id"] == tarefa_id), None)
    if tarefa is None:
        raise HTTPException(status_code=404, detail="Tarefa not found")
    tarefa.update(tarefa_update.dict())
    return tarefa

@app.delete("/tarefas/{tarefa_id}", response_model=Tarefa)
def delete_tarefa(tarefa_id: int):
    tarefa = next((t for t in fake_tarefas_db if t["id"] == tarefa_id), None)
    if tarefa is None:
        raise HTTPException(status_code=404, detail="Tarefa not found")
    fake_tarefas_db.remove(tarefa)
    return tarefa
