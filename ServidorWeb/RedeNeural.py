
from math import isnan
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import pandas as pd
import tensorflow as tf
from RedeAdapter import RedeAdapter
import numpy as np
import sqlite3 as sql


class RedeNeural():

    def __init__(self, caminho_do_modelo, banco):
        self.con = sql.connect(banco, check_same_thread=False)
        self.cursor = self.con.cursor()
        self.modelo = tf.saved_model.load(caminho_do_modelo)
        self.rede = RedeAdapter(banco)
        self.scaler_X = StandardScaler()
        self.scaler_y = StandardScaler()
        self.X_cols = ['tempo_ate_meta', 'tempo_livre_estudo', 'tipo_material', 'nota',
                       'tempo_estudado', 'indice_facilidade_disciplina', 'recomendacao', 'desgastes']

    def prediz(self):

        data = self.rede.get_task()
        data['saida'] = data['saida'].fillna(0)
        dados_teste = data[self.X_cols]
        self.scaler_X.fit(data[self.X_cols])
        dados_teste_padronizados = self.scaler_X.transform(dados_teste)
        dados_teste_tensor = tf.constant(dados_teste_padronizados, dtype=tf.float32)
        previsoes_teste_padronizadas = self.modelo(dados_teste_tensor) # type: ignore
        self.scaler_y.fit(data['saida'].values.reshape(-1, 1))# type: ignore
        previsoes_teste = self.scaler_y.inverse_transform(previsoes_teste_padronizadas.numpy())
        return previsoes_teste

    def update_saida(self):
        dados_previsoes = self.prediz()
        dados_previsoes = dados_previsoes.tolist()  # type: ignore
        dados_previsoes_plano = [item for sublist in dados_previsoes for item in sublist]
        query = """SELECT * FROM tarefas;"""
        self.cursor.execute(query)
        all_dados = self.cursor.fetchall()
        for i in range(len(all_dados)):
            query_update = "UPDATE tarefas SET saida = '{}' WHERE saida = '{}';".format(dados_previsoes_plano[i], i)
            self.cursor.execute(query_update)
        self.con.commit()
        return True
