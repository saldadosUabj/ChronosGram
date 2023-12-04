# Código para ser desenvolvido na feature

from fastapi import FastAPI
from pydantic import BaseModel
import sqlite3


class user(BaseModel):
    id: int
    nome: str
    turno_livre: str
    email: str
    senha: str

class conteudo(BaseModel):
    materia : str


app = FastAPI()
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

@app.post("/user/conteudo")
def estudar(materia:str):
    cadeira = materia
    con = sqlite3.connect('conteudo.db')
    cursor = con.cursor()
    resultado = cursor.execute("SELECT * FROM conteudo WHERE assunto = ?",(cadeira))
    dados = resultado.fetchall()
    cursor.close()
    con.close()
    return resultado



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
