from fastapi import FastAPI, HTTPException
# Código para ser desenvolvido na feature atulizado

from ast import main
from datetime import datetime
from re import U
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from passlib.context import CryptContext

app = FastAPI()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

import sqlite3 as sql
from RedeAdapter import RedeAdapter
from RedeNeural import RedeNeural
from Usuarios import Usuarios

class User(BaseModel):
    id:int
    nome: str
    turno_livre: str
    tipo: str
    email: str
    senha: str
    username: str


class Tarefa(BaseModel):
    id: int  
    meta: str
    data_meta: str
    nome: str
    status: int
    assunto: str
    material_estudo: str
    materia: str
    tempo_ate_meta: int
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
    tipo: str
    email: str
    senha: str
    username: str

class TarefaUpdate(BaseModel):
    meta: str
    data_meta: str
    nome: str
    status: str
    assunto: str
    material_estudo: str
    materia: str
    tempo_ate_meta: int
    tipo_material: int
    nota: int
    tempo_estudado: int
    indice_facilidade_disciplina: int
    recomendacoes: int
    desgastes: int
    saida: float

app = FastAPI()
rede_neural = RedeNeural("ModeloIa")
banco = RedeAdapter()
usuario = Usuarios()
    
    
fake_users_db = [
    {"id": 1, "nome": "User One", "turno_livre": "manhã", "tipo": "casual", "email": "userone@example.com", "senha": pwd_context.hash("password1"), "username": "user1"},
    {"id": 2, "nome": "User Two", "turno_livre": "tarde", "tipo": "intensivo", "email": "usertwo@example.com", "senha": pwd_context.hash("password2"), "username": "user2"},
]

fake_tarefas_db = [
    {"id": 1, "meta": "Complete project", "data_meta": "2024-06-30", "nome": "Project Work", "status": 1,
     "assunto": "Development", "material_estudo": "Books", "materia": "CS", "tempo_ate_meta": 10,
     "tipo_material": 1, "nota": 5, "tempo_estudado": 3,
     "indice_facilidade_disciplina": 4, "recomendacoes": 2, "desgastes": 1, "saida": 95.5}
]

    
@app.post("/users/", response_model=User)
def create_user_matheus(user: User):
    if any(u["username"] == user.username for u in fake_users_db):
        raise HTTPException(status_code=400, detail="Username already registered")
    user_dict = user.dict()
    user_dict["senha"] = pwd_context.hash(user_dict["senha"]) 
    fake_users_db.append(user_dict)
    return user

@app.get("/users/", response_model=List[User])
def read_users_matheus():
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
    
    if any(u["username"] == user_update.username and u["id"] != user_id for u in fake_users_db):
        raise HTTPException(status_code=422, detail="Username already registered") 
    
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


# @app.get("/tarefas")
# def pesquisa():
#     return alunos


# @app.get("/user/{id}")
# def pesquisa_id(id: int):
#     for aluno in alunos:
#         if aluno['id'] == id:
#             return aluno
#     return "not found"


@app.put("/user")
def atualizar(info: User, email, senha):
    atualizado_df = usuario.updateUser(info,email,senha)
    return atualizado_df

@app.post("/users")
def create_user(dados: User):
     usuario.createUser(dados)

@app.get("/users")
def read_users():
    return usuario.readUser()

@app.post("/redeNeural")
def insert_neural_data(dados:Tarefa):
     banco.insert_task(dados)
     #banco.finalizar
     
@app.get("/redeNeural/{meta}/{dia}/{mes}/{ano}/{id}")
def get_neural_data(meta:str , dia:str , mes:str, ano:str,id:str):
    data_entrega = f"{dia}/{mes}/{ano}"
    return banco.get_best_task(meta,data_entrega,id) 

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