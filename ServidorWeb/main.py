# Código para ser desenvolvido na feature

from fastapi import FastAPI
from pydantic import BaseModel
import datetime

class entrada(BaseModel):
    data:str
    materia:str

class saida(BaseModel):
    dia:str
    horario:str 
    assunto:str

app = FastAPI()
conteudo = [
    {
        "dia": "2023-12-2",
        "horario": "18:00",
        "assunto": "derivadas"

    },
    {
        "dia": "2023-12-5",
        "horario": "20:00",
        "assunto": "integrais"
    }
]


@app.get("/user")
def pesquisa():
    return conteudo


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



