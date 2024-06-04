from curses import OK
from email.policy import HTTP
from typing import Self
import uuid
from fastapi import responses
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

    def updateUser(self, new_Data, verificar_email, verificar_senha):
        nome = new_Data.nome
        turno_livre = new_Data.turno_livre
        email = new_Data.email
        senha = new_Data.senha
        dataBase = FireBaseAdmUser.ref.get()
        for key, value in dataBase.items(): # type: ignore
            if (value["email"] == verificar_email) and (value["senha"] == verificar_senha):
                if nome != "string":
                    FireBaseAdmUser.ref.child(key).update({"nome": nome})
                if turno_livre != "string":
                    FireBaseAdmUser.ref.child(key).update({"turno": turno_livre})
                if email != "string":
                    FireBaseAdmUser.ref.child(key).update({"email": email})
                if senha != "string":
                    FireBaseAdmUser.ref.child(key).update({"senha": senha})
                break

        return "OK"





   
