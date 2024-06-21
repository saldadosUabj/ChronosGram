from datetime import datetime
from email.policy import default
import random
from unittest import result
import uuid

import pandas as pd
from pydantic import BaseModel
from pyparsing import NoMatch
from RedeNeural import RedeNeural
from RedeAdapter import RedeAdapter
import sqlite3 as sql
from firebase_admin import credentials, db
import firebase_admin
from firebaseadm import FirebaseAdm

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
# class User(BaseModel):
#     nome: str
#     turno_livre: str
#     email: str
#     senha: str

# firebase_admin.get_app()
# ref = db.reference("/users")
# #print(ref.pegarTabela().get()) 
# newData = {
#   "nome": "string",
#   "turno_livre": "string",
#   "email": "string",
#   "senha": "string"
# }

# dataBase = ref.get()

# print(filtrar)
# for key, value in dataBase:
#             if((value["email"] == "{}".format(verificar_email)) & (value["senha"] == "{}".format(verificar_senha))):
#                 if(nome != None):
#                   FireBaseAdmUser.ref.child(key).update({"nome":{nome}})
#                 if(turno_livre != None):
#                   FireBaseAdmUser.ref.child(key['email']).update({"turno":{turno_livre}})
#                 if(email != None):
#                   FireBaseAdmUser.ref.child(key['email']).update({"email":{email}})
#                 if(senha!= None):
#                   FireBaseAdmUser.ref.child(key['email']).update({"nome":{senha}})
# columns = [desc for desc in dataBase]
# df = pd.DataFrame(dataBase, columns=columns)
# df = df.T
# email = 'vini@gmail.com'
# senha = '123456'
# selecionar = (df['email'] == '{}'.format(email)) & (df['senha'] == '{}'.format(senha))
# select_df = df[selecionar]
# print(select_df.iloc[:,0])


# if((User.nome != None)):
#     ref.child(select_df).update({"nome":{User.nome}})
# if((User.email != None)):
#     ref.child(select_df).update({"email":{User.email}})
# if((User.senha!= None)):
#     ref.child(select_df).update({"senha":{User.senha}})
# if((User.turno_livre!= None)):
#     ref.child(select_df).update({"turno":{User.turno_livre}})

firebase_admin.get_app()

ref = db.reference("/alocacao")

keyUser = "3b265655-1773-11ef-88ba-2c6dc1b23710"
keyTarefa = "a7b08e66-21b0-11ef-b3f1-2c6dc1b23710"

doc = {
            'id_user': keyUser,
            'id_tarefa': keyTarefa
        }
ref.child(str(uuid.uuid1())).set(doc)

