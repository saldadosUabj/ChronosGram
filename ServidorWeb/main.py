# Código para ser desenvolvido na feature atulizado

from ast import main
from datetime import datetime
from fastapi import FastAPI
from pydantic import BaseModel
import sqlite3 as sql
from RedeAdapter import RedeAdapter
from RedeNeural import RedeNeural


class user(BaseModel):
    id: int
    nome: str
    turno_livre: str
    email: str
    senha: str


class Tarefa(BaseModel):
    meta :str
    data_meta:str
    nome: str
    status: str
    assunto: str
    material_estudo: str
    materia: str
    tempo_ate_meta: int
    tempo_livre_estudo: int
    tipo_material: int
    nota: int
    tempo_estudado: int
    indice_facilidade_disciplina: int
    recomendacoes:int
    desgastes: int
    saida: float


app = FastAPI()
banco = RedeAdapter("banco.db")
rede_neural = RedeNeural("ModeloIa", "banco.db")


# @app.get("/tarefas")
# def pesquisa():
#     return alunos


# @app.get("/user/{id}")
# def pesquisa_id(id: int):
#     for aluno in alunos:
#         if aluno['id'] == id:
#             return aluno
#     return "not found"


# @app.post("/user")
# def inserir(info: user):
#     alunos.append({
#         "id": info.id,
#         "nome": info.nome,
#         "email": info.email,
#         "senha": info.senha,
#         "turno_livre": info.turno_livre
#     })
#     return alunos


# @app.put("/user/id")
# def atualizar(info: user, id: int):
#     contador = 0
#     for aluno in alunos:
#         if aluno["id"] == id:
#             alunos[contador] = {
#                 "id": info.id,
#                 "nome": info.nome,
#                 "email": info.email,
#                 "senha": info.senha,
#                 "turno_livre": info.turno_livre
#             }
#         return "atualizado"
#         contador += 1
#     return "produto inexistente"


@app.post("/redeNeural")
def insert_neural_data(dados: Tarefa):
     banco.insert_task(dados)
     #banco.finalizar
     
@app.get("/redeNeural/{meta}/{dia}/{mes}/{ano}")
def get_neural_data(meta:str , dia:str , mes:str, ano:str):
    #formato_string = "%d/%m/%Y"
    data_entrega = f"{dia}/{mes}/{ano}"
    #data_entrega = datetime.strptime(data_entrega,formato_string) #type:ignore
    #data_today = datetime.today
    #duracao = abs(data_entrega - data_today).days #type:ignore
    return banco.get_best_task(meta,data_entrega) # type: ignore

# @app.put("/tarefas")
# def insert_tarefas(tarefa: Tarefa):
#     print(tarefa)
#     banco.insert_task(tarefa)
#     banco.finalizar


@app.get("/redeNeural")
def update_dados():
    return rede_neural.update_rede()


if __name__ == "__main__":
    import uvicorn

    # Run the FastAPI app using uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
