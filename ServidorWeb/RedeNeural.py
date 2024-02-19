
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import pandas as pd
import tensorflow as tf
from RedeAdapter import RedeAdapter
import numpy as np



class RedeNeural():

    def __init__(self, caminho_do_modelo, banco):
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
        dados_teste_tensor = tf.constant(
            dados_teste_padronizados, dtype=tf.float32)
        previsoes_teste_padronizadas = self.modelo(dados_teste_tensor)

        self.scaler_y.fit(data['saida'].values.reshape(-1, 1))
        previsoes_teste = self.scaler_y.inverse_transform(
            previsoes_teste_padronizadas.numpy())

        return previsoes_teste
    
    def update_saida(self):
        dados_previsoes = self.prediz()
        #consultar o banco de dados e fazer o update das saidas 
        return True