from datetime import datetime
from email.policy import default
from unittest import result

import pandas as pd
from pydantic import BaseModel
from RedeNeural import RedeNeural
from RedeAdapter import RedeAdapter
import sqlite3 as sql
from firebase_admin import db, credentials
import firebase_admin

# 
# Redeadaptar = RedeAdapter("banco.db")
# con = sql.connect("banco.db", check_same_thread=False)
# cursor = con.cursor()
# meta = "prova"
# data_meta = "15/04/2024"
# query_meta = "SELECT * FROM tarefas WHERE meta = '{}' and data_meta ='{}';".format(meta, data_meta)
# tasks = pd.read_sql_query(query_meta,con)
# print(tasks)

# tasks.sort_values(by = "saida", ascending=True)
# dataframe_metas_json = tasks.to_json()

# print(dataframe_metas_json)
# redeNeural = RedeNeural("/home/yrikes/Codigos/projeto/ChronosGram/ModeloIa","banco.db")
# print(Redeadaptar.get_task())
# saida = redeNeural.prediz()
# Redeadaptar.update_saida(saida)
# print(Redeadaptar.get_task())
# Redeadaptar.get_best_task('prova','10/03/2024')

# redeNeural.update_saida()
#rede = RedeAdapter("ChronosGram/ServidorWeb/banco.db")
#con = sql.connect("banco.db", check_same_thread=False)
#cursor = con.cursor()
# data_entrega = "22/02/2024"
# formato_string = "%d/%m/%Y"
# data_entrega = datetime.strptime(data_entrega,formato_string) #type:ignore
# data_today = datetime.today()
# resultado = abs(data_entrega - data_today).days
# print(resultado)

# query = ("""CREATE TABLE IF NOT EXISTS tarefas (
#                 id INTEGER PRIMARY KEY AUTOINCREMENT,
#                 meta TEXT,
#                 data_meta TEXT,
#                 nome TEXT,
#                 status INTEGER,
#                 assunto TEXT,
#                 material_estudo TEXT,
#                 materia TEXT,
#                 tempo_ate_meta  INTEGER,
#                 tempo_livre_estudo INTEGER,
#                 tipo_material INTEGER,
#                 nota INTEGER,
#                 tempo_estudado INTEGER,
#                 indice_facilidade_disciplina INTEGER,
#                 recomendacao INTEGER,
#                 desgastes FLOAT,
#                 saida FLOAT

# );
# """)
# query = f"""INSERT INTO tarefas (meta,data_meta,nome, status, assunto, material_estudo, materia, tempo_ate_meta, tempo_livre_estudo, tipo_material, nota, tempo_estudado, indice_facilidade_disciplina,recomendacao,desgastes) VALUES
                    #    ('{'prova'}','{'10/03/2024'}','{'a'}', '{10}','{'b'}','{"oi"}','{"boa"}','{10}', '{2}','{2}','{4}','{2}','{5}','{2}','{8}')
        #   """
# query = "INSERT INTO tarefa (meta, data_meta,nome, status, assunto, material_estudo, materia, tempo_ate_meta, tempo_livre_estudo, tipo_material, nota, tempo_estudado, indice_facilidade_disciplina,recomendacao,desgastes, saida) VALUES('{'s'}','st','st', '9','stng','sing',''strg,'2', '3','1','7','4','6','34','6','0.0')"
# cursor.execute(query)
# con.commit()#redeadaptar.get_task()
# con = sql.connect("ServidorWeb/banco.db")
# cursor = con.cursor()
# query = "SELECT * FROM tarefas;"
# cursor.execute(query)
# result = cursor.fetchall()  # Recupera os resultados da consulta



#         # Transforma os resultados em um DataFrame
# columns = [desc[-1] for desc in cursor.description]
# df = pd.DataFrame(result, columns=columns)
# print(df)
class User(BaseModel):
    nome: str
    turno_livre: str
    email: str
    senha: str

firebase_admin.get_app()
ref = db.reference("/users")
#print(ref.pegarTabela().get()) 

dataBase = ref.get()
columns = [desc for desc in dataBase]
df = pd.DataFrame(dataBase, columns=columns)
df = df.T
email = 'vini@gmail.com'
senha = '123456'

# select_df = (df['email'] == email) & (df['senha'] == senha)
# if(select_df):
#         if((new_Data.nome != None)):
#                 ref.child(select_df['id']).update({"nome":{new_Data.nome}})
#         if((new_Data.email != None)):
#                 ref.child(select_df['id']).update({"nome":{new_Data.email}})
#         if((new_Data.senha!= None)):
#                 ref.child(select_df['id']).update({"nome":{new_Data.senha}})
#         if((new_Data.turno_livre!= None)):
#                 ref.child(select_df['id']).update({"nome":{new_Data.turno}})

