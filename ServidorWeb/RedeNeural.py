
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
        print(type(self.model))
        print(dir(self.model))
        print(tf.__version__)

        X_cols = ['tempo_ate_meta', 'tempo_livre_estudo', 'tipo_material', 'recomendacao',
                  'nota', 'indice_facilidade_disciplina', 'desgastes', 'tempo_estudado']
        dados_treinamento = pd.read_csv('teste_treinamento.csv')
        self.scaler_X.fit(dados_treinamento[X_cols])
        self.scaler_y.fit(dados_treinamento[['saida']])

        dados_teste_padronizados = self.scaler_X.transform(dados_treinamento[X_cols])
        previsoes_teste_padronizadas = self.model.predict(dados_teste_padronizados)  # type: ignore
        previsoes_teste = self.scaler_y.inverse_transform(previsoes_teste_padronizadas)
        resultado = pd.DataFrame(previsoes_teste, columns=[ 'saida'])  # type: ignore
        resultado = pd.concat([dados_rede, resultado], axis=1)
        resultado = resultado.to_json(orient='records')
        return resultado
