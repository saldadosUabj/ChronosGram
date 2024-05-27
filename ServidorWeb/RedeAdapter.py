from curses import meta
from datetime import datetime
import imp
import sqlite3 as sql
from time import time
from matplotlib.font_manager import stretch_dict
from pydantic import BaseModel
import pandas as pd
import firebase_admin
from firebase_admin import credentials, db
from firebase_admin import db
import uuid


class admin():
    cred = credentials.Certificate(
        "chronosgram-b6288-firebase-adminsdk-rvgjf-74165c4cc3.json")
    default_app = firebase_admin.initialize_app(cred, {
        'databaseURL': "https://banco-usuario-default-rtdb.firebaseio.com/"
    })
    ref = db.reference("/tarefas")


class Tarefa(BaseModel):
    meta: str
    data_meta: str
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
    recomendacoes: int
    desgastes: int
    saida: float


class RedeAdapter():

    def __init__(self, banco_dados):
        self.con = sql.connect(banco_dados, check_same_thread=False)
        self.cursor = self.con.cursor()
    
    def dataframeTarefas(self):
        list_taks_saves = admin.ref.get()
        columns = [desc for desc in list_taks_saves]
        df = pd.DataFrame(list_taks_saves, columns=columns)
        return  df.T

    def insert_task(self, tarefa):
        meta = tarefa.meta
        data_meta = tarefa.data_meta
        nome = tarefa.nome
        status = tarefa.status
        assunto = tarefa.assunto
        material_estudo = tarefa.material_estudo
        materia = tarefa.materia
        tempo_ate_meta = tarefa.tempo_ate_meta
        tempo_livre_estudo = tarefa.tempo_livre_estudo
        tipo_material = tarefa.tipo_material
        nota = tarefa.nota
        tempo_estudado = tarefa.tempo_estudado
        indice_facilidade_disciplina = tarefa.indice_facilidade_disciplina
        recomendacoes = tarefa.recomendacoes
        desgastes = tarefa.desgastes
        saida = tarefa.saida

        doc_data = {
            'meta': meta,
            'data_meta': data_meta,
            'nome': nome,
            'status': status,
            'assunto': assunto,
            'material_estudo': material_estudo,
            'materia': materia,
            'tempo_ate_meta': tempo_ate_meta,
            'tempo_livre_estudo': tempo_livre_estudo,
            'tipo_material': tipo_material,
            'nota': nota,
            'tempo_estudado': tempo_estudado,
            'indice_facilidade_disciplina': indice_facilidade_disciplina,
            'recomendacao': recomendacoes,
            'desgastes': desgastes,
            'saida': saida
        }
        admin.ref.child(str(uuid.uuid1())).set(doc_data)

    def get_tasks(self):
        # list_taks_saves = admin.ref.get()
        # columns = [desc for desc in list_taks_saves]
        # df = pd.DataFrame(list_taks_saves, columns=columns)
        return self.dataframeTarefas()

    def get_best_task(self, meta, data_meta):
        # list_taks_saves = admin.ref.get()
        # columns = [desc for desc in list_taks_saves]
        # df = pd.DataFrame(list_taks_saves, columns=columns)
        df = self.dataframeTarefas()
        #df = df[['meta', 'data_meta', 'saida']]
        selecionar = (df['meta'] == {meta}) & (df['data_meta'] == {data_meta})
        df = df[selecionar]
        df = df.sort_values(by="saida", ascending=False)

        return df.to_json()

    def update_saida(self, saida_values):
        df = self.dataframeTarefas()
        for i, valor_saida in enumerate(saida_values):
            # list_taks_saves = admin.ref.get()
            # columns = [desc for desc in list_taks_saves]
            # df = pd.DataFrame(list_taks_saves, columns=columns)
            df = df.loc[i,'saida'] = abs(valor_saida[0]) 
            #update_query = f"UPDATE tarefas SET saida = {abs(valor_saida[0])} WHERE rowid = {i + 1}"
            #print(update_query)
            #self.cursor.execute(update_query)
        return self.get_tasks().to_json()
    
    

