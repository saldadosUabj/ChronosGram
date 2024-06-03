from typing import Self
import uuid
import firebase_admin
from firebase_admin import credentials, db
from h11 import Response
import pandas as pd
from pydantic import BaseModel

from FireBaseAdm import FirebaseAdm


class FireBaseAdmUser():
    firebase_admin.get_app()
    ref = db.reference("/users")


class User(BaseModel):
    nome: str
    turno_livre: str
    email: str
    senha: str


class Usuarios():
    def __init__(self) -> None:
        pass

    def dataframeUser(self):
        dataBase = FireBaseAdmUser.ref.get()
        columns = [desc for desc in dataBase]
        df = pd.DataFrame(dataBase, columns=columns)
        return df.T

    def createUser(self, user):
        nome = user.nome
        turno_livre = user.turno_livre
        email = user.email
        senha = user.senha

        data = {
            'nome': nome,
            'turno': turno_livre,
            'email': email,
            'senha': senha
        }

        FireBaseAdmUser.ref.child(str(uuid.uuid1())).set(data)

    def readUser(self):
        return self.dataframeUser()

    def updateUser(self, new_Data, email, senha):
        df = self.dataframeUser()
        select_df = (df['email'] == email) & (df['senha'] == senha)
        if(select_df):
            if((new_Data.nome != None)):
                FireBaseAdmUser.ref.child(select_df['id']).update({"nome":{new_Data.nome}})
            if((new_Data.email != None)):
                FireBaseAdmUser.ref.child(select_df['id']).update({"nome":{new_Data.email}})
            if((new_Data.senha!= None)):
                FireBaseAdmUser.ref.child(select_df['id']).update({"nome":{new_Data.senha}})
            if((new_Data.turno_livre!= None)):
                FireBaseAdmUser.ref.child(select_df['id']).update({"nome":{new_Data.turno}})
        return select_df




   
