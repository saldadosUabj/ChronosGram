from curses import meta
from datetime import datetime
import imp
import sqlite3 as sql
from time import time
from matplotlib import table
from matplotlib.font_manager import stretch_dict
import numpy as np
from pydantic import BaseModel
import pandas as pd
import firebase_admin
from firebase_admin import credentials, db
from firebase_admin import db
import uuid
from firebasedefault import Default

from firebasedefault import Default


class FireBaseAdmRede():
    firebase_admin.get_app()
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

    def __init__(self) -> None:
        pass
    
    def dataframeTarefas(self):
        list_taks_saves = FireBaseAdmRede.ref.get()
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
        FireBaseAdmRede.ref.child(str(uuid.uuid1())).set(doc_data) 

    def get_tasks(self):
        return self.dataframeTarefas()

    def get_best_task(self, meta, data_meta):
        select = []
        list_taks_saves = FireBaseAdmRede.ref.get()
        for key,values in list_taks_saves.items(): # type: ignore
            if((values['meta'] == meta) & (values['data_meta'] == data_meta)):
                select.append(values)
        columns = ["assunto","data_meta", "desgastes","id","indice_facilidade_disciplina","materia","material,estudo", "meta","nome","nota","recomendacoes","saida","status","tempo_ate_meta","tempo_estudado","tipo_material"]
        df = pd.DataFrame(select, columns=columns)
        df["saida"] = df["saida"].astype(float)
        df = df.sort_values(by = ["saida"], ascending=False)
        return df.to_json()

    def update_saida(self, saida_values):
        saida_values=saida_values[np.isfinite(saida_values)].tolist()
        list_taks_saves = FireBaseAdmRede.ref.get()
        for i,(key,values) in enumerate(list_taks_saves.items()): # type: ignore
            if i < len(saida_values):
                values['saida'] = saida_values[i]
                FireBaseAdmRede.ref.child(key).set(values)
        return self.get_tasks().to_json()
    
    

