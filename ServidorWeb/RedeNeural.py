
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import pandas as pd
import tensorflow as tf
from RedeAdapter import RedeAdapter
import numpy as np


class RedeNeural():

    def __init__(self, caminho_do_modelo, banco):
        self.model = tf.saved_model.load(caminho_do_modelo)
        self.rede = RedeAdapter(banco)
        self.scaler_X = StandardScaler()
        self.scaler_y = StandardScaler()

    def prediz(self):

        dados_rede = self.rede.get_task()

        dados_rede['tempo_ate_meta'] = pd.to_datetime(dados_rede['tempo_ate_meta'])
        data_referencia = pd.Timestamp("2023-01-01")
        dados_rede['tempo_ate_meta'] = (dados_rede['tempo_ate_meta'] - data_referencia).dt.days
        X_cols = ['tipo_material', 'recomendacao' , 'nota','indice_facilidade_disciplina', 'desgastes', 'tempo_estudado', 'tempo_livre_estudo', 'saida']

        self.scaler_X.fit(dados_rede[X_cols]) #eu preciso de todos os dados que foram treinados
        self.scaler_y.fit(dados_rede[['tempo_ate_meta','tempo_livre_estudo']])
        
        dados_teste_padronizados = self.scaler_X.transform(dados_rede[X_cols])
        previsoes_teste_padronizadas = self.model.predict(dados_teste_padronizados) # type: ignore
        previsoes_teste = self.scaler_y.inverse_transform(previsoes_teste_padronizadas)
        resultado = pd.DataFrame(previsoes_teste, columns=['tempo_ate_meta', 'tempo_livre_estudo']) # type: ignore
        resultado = pd.concat([dados_rede, resultado], axis=1)
        resultado = resultado.to_json(orient='records')
        return resultado
