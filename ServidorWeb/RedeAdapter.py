from curses import meta
from datetime import datetime
import sqlite3 as sql
from time import time
from matplotlib.font_manager import stretch_dict
from pydantic import BaseModel
import pandas as pd
import firebase_admin
from firebase_admin import credentials, db
from firebase_admin import db
import uuid



class FireBaseAdmRede():
    firebase_admin.get_app()
    ref = db.reference("/tarefas")

class Tarefa(BaseModel):
    meta :str
    data_meta:str
    nome: str
    status: int
    assunto: str
    material_estudo: str
    materia: str
    tempo_ate_meta: int
    tempo_livre_estudo: int
    tipo_material: int
    nota: int
    tempo_estudado: int
    indice_facilidade_disciplina: int
    recomendacoes:int
    desgastes: int
    saida: float


class RedeAdapter():

    def __init__(self, banco_dados):
        self.con = sql.connect(banco_dados, check_same_thread=False)
        self.cursor = self.con.cursor()

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

        query = """INSERT INTO tarefas (
                        meta, data_meta, nome, status, assunto, material_estudo, materia,
                        tempo_ate_meta, tempo_livre_estudo, tipo_material, nota, tempo_estudado,
                        indice_facilidade_disciplina, recomendacao, desgastes, saida
                ) VALUES (
                    ?, ?, ?, ?, ?, ?, ?,
                    ?, ?, ?, ?, ?, ?, ?, ?, ?
                )"""

    # Assuming you have a tuple or list of values
        values = (meta, data_meta, nome, status, assunto, material_estudo, materia,
            tempo_ate_meta, tempo_livre_estudo, tipo_material, nota, tempo_estudado,
            indice_facilidade_disciplina, recomendacoes, desgastes, saida)

        self.cursor.execute(query, values)

        self.con.commit()

    def get_task(self):
        query = "SELECT * FROM tarefas;"
        self.cursor.execute(query)
        result = self.cursor.fetchall()  # Recupera os resultados da consulta
        self.con.commit()

        # Transforma os resultados em um DataFrame
        columns = [desc[0] for desc in self.cursor.description]
        df = pd.DataFrame(result, columns=columns)
        
        return df
    def get_best_task(self,meta,data_meta):
        query_meta = "SELECT * FROM tarefas WHERE meta = '{}' and data_meta ='{}';".format(meta, data_meta)
        tasks = pd.read_sql_query(query_meta,self.con)
        print(tasks)

        tasks.sort_values(by = "saida", ascending=True)
        dataframe_metas_json = tasks.to_json()

        return dataframe_metas_json
     
        
    
    def update_saida(self,saida_values):
        
        for i, valor_saida in enumerate(saida_values):

            update_query = f"UPDATE tarefas SET saida = {abs(valor_saida[0])} WHERE rowid = {i + 1}"
            print(update_query)
            self.cursor.execute(update_query)
        return self.get_task().to_json()
        
    #def finalizar(self):
    #    self.con.close()
