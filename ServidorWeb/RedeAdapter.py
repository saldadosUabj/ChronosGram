from datetime import datetime
import sqlite3 as sql
from time import time
from pydantic import BaseModel
import pandas as pd


class Tarefa(BaseModel):
    nome: str
    status: int
    assunto: str
    material_estudo: str
    tempo_ate_meta: datetime
    tempo_livre_estudo: int
    tipo_material: int
    nota: int
    tempo_estudado: int
    indice_facilidade_disciplina: int
    desgastes: int
    saida: float


class Neural(BaseModel):
    nome: str
    status: int
    assunto: str
    material_estudo: str
    tempo_ate_meta: datetime
    tempo_livre_estudo: int
    tipo_material: int
    nota: int
    tempo_estudado: int
    indice_facilidade_disciplina: int
    desgastes: int
    saida: float


class RedeAdapter():

    def __init__(self, banco_dados):
        self.con = sql.connect(banco_dados, check_same_thread=False)
        self.cursor = self.con.cursor()

    def insert_task(self, tarefa):
        nome = tarefa.nome
        status = tarefa.status
        assunto = tarefa.assunto
        material_estudo = tarefa.material_estudo
        tempo_ate_meta = tarefa.tempo_ate_meta
        tempo_livre_estudo = tarefa.tempo_livre_estudo
        tipo_material = tarefa.tipo_material
        nota = tarefa.nota
        tempo_estudado = tarefa.tempo_estudado
        indice_facilidade_disciplina = tarefa.indice_facilidade_disciplina
        desgastes = tarefa.desgastes
        saida = tarefa.saida

        query = f"""INSERT INTO tarefa (nome, status, assunto, material_estudo,tempo_ate_meta, tempo_livre_estudo, tipo_material, nota, tempo_estudado, indice_facilidade_disciplina,desgastes, saida) VALUES
                     ('{nome}', '{status}','{assunto}','{material_estudo}','{tempo_ate_meta}', '{tempo_livre_estudo}','{tipo_material}','{nota}','{tempo_estudado}','{indice_facilidade_disciplina}','{desgastes}','{saida}')
        """
        self.cursor.execute(query)
        self.con.commit()

    def insert_dataNerual(self, neural):
        nome = neural.nome
        status = neural.status
        assunto = neural.assunto
        material_estudo = neural.material_estudo
        tempo_ate_meta = neural.tempo_ate_meta
        tempo_livre_estudo = neural.tempo_livre_estudo
        tipo_material = neural.tipo_material
        nota = neural.nota
        tempo_estudado = neural.tempo_estudado
        indice_facilidade_disciplina = neural.indice_facilidade_disciplina
        desgastes = neural.desgastes
        saida = neural.saida

        query = f"""INSERT INTO neural (nome, status, assunto, material_estudo,tempo_ate_meta, tempo_livre_estudo, tipo_material, nota, tempo_estudado, indice_facilidade_disciplina,desgastes, saida) VALUES
                    ('{nome}', '{status}','{assunto}','{material_estudo}','{tempo_ate_meta}', '{tempo_livre_estudo}','{tipo_material}','{nota}','{tempo_estudado}','{indice_facilidade_disciplina}','{desgastes}','{saida}')
        """

        self.cursor.execute(query)
        self.con.commit()

    def get_dataNeural(self):
        query = "SELECT * FROM neural;"
        self.cursor.execute(query)
        result = self.cursor.fetchall()  # Recupera os resultados da consulta
        self.con.commit()

        # Transforma os resultados em um DataFrame
        columns = [desc[0] for desc in self.cursor.description]
        df = pd.DataFrame(result, columns=columns)
        return df

    def get_task(self):
        query = "SELECT * FROM tarefa;"
        self.cursor.execute(query)
        result = self.cursor.fetchall()  # Recupera os resultados da consulta
        self.con.commit()

        # Transforma os resultados em um DataFrame
        columns = [desc[0] for desc in self.cursor.description]
        df = pd.DataFrame(result, columns=columns)
        return df

    def finalizar(self):
        self.con.close()
