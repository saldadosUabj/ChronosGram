from typing import Self
import uuid
import firebase_admin
from firebase_admin import credentials,db
from pydantic import BaseModel

from FireBaseAdm import FirebaseAdm

class user(BaseModel):
    id: int
    nome: str
    turno_livre: str
    email: str
    senha: str


class Usuarios():

    def __init__(self, tabela):
        self.ref = FirebaseAdm.tabela(tabela)
    
    def createUser(self, user):
       nome = user.nome
       turno_livre = user.turno_livre
       email= user.email
       senha = user.senha

       data = {
           'nome': nome,
           'turno': turno_livre,
           'email': email,
           'senha': senha
       }

       self.ref.child(uuid.uuid1()).set(data)

    
    # def readUser(self):

    
    # def updateUser(self):

    
    # def deleteUser(self):
