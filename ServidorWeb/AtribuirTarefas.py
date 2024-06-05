import random
from uuid import uuid1
import uuid
import firebase_admin
from firebase_admin import db
from numpy import integer
import pandas as pd
from pydantic import BaseModel

class FireBaseAdmGeral():
    firebase_admin.get_app()
    ref_tarefas = db.reference("/tarefas")
    ref_users = db.reference("/users")
    ref_alocar = db.reference("/alocacao")

class Atribuir(BaseModel):
    keyUser : str
    keyTarefa: str

class AtribuirTarefas():

    def __init__(self) -> None:
        pass

    def alocacao(self, atribuir):
        keyUser = atribuir.keyUser
        keyTarefa =  atribuir.keyTarefa

        doc = {
            'id_user': keyUser,
            'id_tarefa': keyTarefa
        }

        FireBaseAdmGeral.ref_alocar.child(str(uuid.uuid1())).set(doc)
    
    def getTask_byUser(self,id_user):
        dataBase = FireBaseAdmGeral.ref_alocar.get()
        columns = [desc for desc in dataBase]
        df = pd.DataFrame(dataBase, columns=columns)
        df = df.T
        filtro = df['id_user'] == id_user
        df = df[filtro]
        return df.to_json()
    
