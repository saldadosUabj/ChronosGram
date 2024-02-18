from datetime import datetime
import sqlite3 as sql
from time import time
from pydantic import BaseModel
import pandas as pd


class Tarefa(BaseModel):
    # nome: str
    # status: int
    # assunto : str
    # material_estudo : str
    # tipo_material : int
    # recomendacao : float
    # qualidade : int
    # horario : int
    # prioridade : float
    # data_inicio : str
    # data_fim : str
    # tempo_estimado : float
    # posicao : int
    tempo_ate_meta: datetime
    tempo_livre_estudo: int
    tipo_material: int
    nota: int
    tempo_estudado: int
    indice_facilidade_disciplina: int


class Neural(BaseModel):
    # nome: str
    # status: int
    # assunto: str
    # material_estudo: str
    # tipo_material: int
    # recomendacao: float
    # qualidade: int
    # horario: int
    # prioridade: float
    # data_inicio: str
    # data_fim: str
    # tempo_estimado: float
    # posicao: int
    tempo_ate_meta: datetime
    tempo_livre_estudo: int
    tipo_material: int
    nota: int
    tempo_estudado: int
    indice_facilidade_disciplina: int


class RedeAdapter():

    def __init__(self, banco_dados):
        self.con = sql.connect(banco_dados, check_same_thread=False)
        self.cursor = self.con.cursor()

    def insert_task(self, tarefa):
        tempo_ate_meta = tarefa.tempo_ate_meta
        tempo_livre_estudo = tarefa.tempo_livre_estudo
        tipo_material = tarefa.tipo_material
        nota = tarefa.nota
        tempo_estudado = tarefa.tempo_estudado
        indice_facilidade_disciplina = tarefa.indice_facilidade_disciplina
        # nome = tarefa.nome
        # status = tarefa.status
        # assunto = tarefa.assunto
        # material_estudo = tarefa.material_estudo
        # tipo_material = tarefa.tipo_material
        # recomendacao = tarefa.recomendacao
        # qualidade = tarefa.qualidade
        # horario = tarefa.horario
        # prioridade = tarefa.prioridade
        # data_inicio = tarefa.data_inicio
        # data_fim = tarefa.fim
        # tempo_estimado = tarefa.tempo_estimado
        # posicao = tarefa.posicao

        # query = f"""INSERT INTO tarefa (nome, status, assunto, material_estudo, tipo_material, recomendacao, qualidade, horario, prioridade, data_inicio, data_fim, tempo_estimado, posicao) VALUES
        #             ('{nome}', '{status}','{assunto}','{material_estudo}','{tipo_material}','{recomendacao}','{qualidade}','{horario}','{prioridade}','{data_inicio}','{data_fim}','{tempo_estimado}','{posicao}')
        # """

        query = f"""INSERT INTO tarefa (tempo_ate_meta, tempo_livre_estudo, tipo_material, nota, tempo_estudado, indice_facilidade_disciplina) VALUES
                    ('{tempo_ate_meta}', '{tempo_livre_estudo}','{tipo_material}','{nota}','{tempo_estudado}','{indice_facilidade_disciplina}')
        """
        self.cursor.execute(query)
        self.con.commit()

    def insert_dataNerual(self, neural):

        tempo_ate_meta = neural.tempo_ate_meta
        tempo_livre_estudo= neural.tempo_livre_estudo
        tipo_material = neural.tipo_material
        nota = neural.nota
        tempo_estudado = neural.tempo_estudado
        indice_facilidade_disciplina = neural.indice_facilidade_disciplina

        # nome = neural.nome
        # status = neural.status
        # assunto = neural.assunto
        # material_estudo = neural.material_estudo
        # tipo_material = neural.tipo_material
        # recomendacao = neural.recomendacao
        # qualidade = neural.qualidade
        # horario = neural.horario
        # prioridade = neural.prioridade
        # data_inicio = neural.data_inicio
        # data_fim = neural.fim
        # tempo_estimado = neural.tempo_estimado
        # posicao = neural.posicao

        # query = f"""INSERT INTO tarefa (nome, status, assunto, material_estudo, tipo_material, recomendacao, qualidade, horario, prioridade, data_inicio, data_fim, tempo_estimado, posicao) VALUES
        #             ('{nome}', '{status}','{assunto}','{material_estudo}','{tipo_material}','{recomendacao}','{qualidade}','{horario}','{prioridade}','{data_inicio}','{data_fim}','{tempo_estimado}','{posicao}')
        # """

        query = f"""INSERT INTO tarefa (tempo_ate_meta, tempo_livre_estudo, tipo_material, nota, tempo_estudado, indice_facilidade_disciplina) VALUES
                    ('{tempo_ate_meta}', '{tempo_livre_estudo}','{tipo_material}','{nota}','{tempo_estudado}','{indice_facilidade_disciplina}')
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
