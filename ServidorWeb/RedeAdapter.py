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

        query = f"""INSERT INTO tarefa (nome, status, assunto, material_estudo, materia, tempo_ate_meta, tempo_livre_estudo, tipo_material, nota, tempo_estudado, indice_facilidade_disciplina,recomendacao,desgastes, saida) VALUES
                     ('{nome}', '{status}','{assunto}','{material_estudo}',''{materia},'{tempo_ate_meta}', '{tempo_livre_estudo}','{tipo_material}','{nota}','{tempo_estudado}','{indice_facilidade_disciplina}','{recomendacoes}','{desgastes}','{saida}')
        """
        self.cursor.execute(query)
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
    def get_best_task(self,meta):
        query_meta = "SELECT * FROM tarefas WHERE nome = '{}';".format(meta)
        self.cursor.execute(query_meta)
        resultado = self.cursor.fetchall()
        self.con.commit()

        colunas = [desc[0] for desc in self.cursor.description]
        dataframe_metas = pd.DataFrame(resultado, columns = colunas)
        dataframe_metas.sort_values(by = "saida")
        dataframe_metas_json = dataframe_metas.to_json()

        return dataframe_metas_json
        #fazer uma consulta para retringir apenas as tarefas associadas aquela meta
        #-----A consuta retona um Dataframe
        #Ordenar as tarefas pela coluna saida 
        #Retorna em json as tarefas da tabela 
        
        
    #def finalizar(self):
        self.con.close()
