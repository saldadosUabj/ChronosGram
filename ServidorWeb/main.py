# Código para ser desenvolvido na feature

from fastapi import FastAPI
from pydantic import BaseModel
import sqlite3 as sql
from RedeAdapter import RedeAdapter


class user(BaseModel):
    id: int
    nome: str
    turno_livre: str
    email: str
    senha: str
    
class DadosRede(BaseModel):
    assunto : str
    data_limite : float
    
class Tarefa(BaseModel):
    nome : str
    status : float
    assunto : str
    material_estudo : str
    tipo_material : int
    recomendacao : float
    qualidade : int
    horario : int
    prioridade : float
    data_inicio : int
    data_fim : int
    tempo_estimado : float
    posicao : int


app = FastAPI()
banco = RedeAdapter("banco.db")

alunos = [
    {
        "id": 1,
        "nome": "Vinicius",
        "email": "vinicius@gmail.com",
        "senha": "123456",
        "turno_livre": "manhã"
    },
    {
        "id": 2,
        "nome": "Alessandro",
        "email": "alessandro@gmail.com",
        "senha": "789123",
        "turno_livre": "noite"
    }
]


@app.get("/user")
def pesquisa():
    return alunos


@app.get("/user/{id}")
def pesquisa_id(id: int):
    for aluno in alunos:
        if aluno['id'] == id:
            return aluno
    return "not found"


@app.post("/user")
def inserir(info: user):
    alunos.append({
        "id": info.id,
        "nome": info.nome,
        "email": info.email,
        "senha": info.senha,
        "turno_livre": info.turno_livre
    })
    return alunos


@app.put("/user/id")
def atualizar(info: user, id: int):
    contador = 0
    for aluno in alunos:
        if aluno["id"] == id:
            alunos[contador] = {
                "id": info.id,
                "nome": info.nome,
                "email": info.email,
                "senha": info.senha,
                "turno_livre": info.turno_livre
            }
        return "atualizado"
        contador += 1
    return "produto inexistente"

@app.put("/redeNeural")
def insert_neural_data(dados: DadosRede):
   banco.insert_dataNerual(dados)
   banco.finalizar

@app.put("/tarefas")
def insert_tarefas(tarefa:Tarefa):
    print(tarefa)
    banco.insert_task(tarefa)
    banco.finalizar
    
    