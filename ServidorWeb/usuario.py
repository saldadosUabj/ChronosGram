from pydantic import BaseModel
from typing import Optional

class User(BaseModel):
    id: str
    nome: str
    turno_livre: str
    tipo: str
    email: str
    senha: str
    username: str

class UserUpdate(BaseModel):
    nome: str
    turno_livre: str
    tipo: str
    email: str
    senha: str
    username: str
