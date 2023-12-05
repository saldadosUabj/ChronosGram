from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import pandas as pd
import tensorflow as tf
import RedeAdapter
import numpy as np

class RedeNeural():

    def _init_(self, caminho_do_modelo,banco):
        self.model = tf.saved_model.load(caminho_do_modelo)
        self.rede = RedeAdapter.RedeAdapter(banco)

    def prediz(self):
        
        dados_rede = self.rede.get_dataNeural()
        
        dados_rede['Data Final'] = pd.to_datetime(dados_rede['Data Final'])
        dados_rede['Data Início'] = pd.to_datetime(dados_rede['Data Início'])
        data_referencia = pd.Timestamp("2023-01-01")
        dados_rede['Data Final'] = (dados_rede['Data Final'] - data_referencia).dt.days
        dados_rede['Data Início'] = (dados_rede['Data Início'] - data_referencia).dt.days
        X_cols = ['Tipo', 'Recomendações' , 'Qualidade','Pontuação', 'Prioridade', 'Data Final', 'Tempo Estimado']
        scaler_X = StandardScaler()
        scaler_y = StandardScaler()
        dados_teste_padronizados = scaler_X.transform(dados_rede[X_cols])
        previsoes_teste_padronizadas = self.model.predict(dados_teste_padronizados) # type: ignore
        previsoes_teste = scaler_y.inverse_transform(previsoes_teste_padronizadas)
        resultado = pd.DataFrame(previsoes_teste, columns=['Horário', 'Data Início', 'ordem']) # type: ignore
        resultado = pd.concat([dados_rede, resultado], axis=1)
        resultado = resultado.to_json(orient='records')
        return resultado

