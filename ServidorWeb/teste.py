from datetime import datetime
from math import fabs
from re import S
from unittest import result

import pandas as pd
from pyparsing import col
from RedeNeural import RedeNeural
from RedeAdapter import RedeAdapter
import sqlite3 as sql

from firebase_admin import credentials, db
import firebase_admin
from firebaseadm import FirebaseAdm

# Redeadaptar = RedeAdapter("banco.db")
# redeNeural = RedeNeural("/home/yrikes/Codigos/projeto/ChronosGram/ModeloIa","banco.db")
# print(Redeadaptar.get_task())
# saida = redeNeural.prediz()
# Redeadaptar.update_saida(saida)
# print(Redeadaptar.get_task())
# Redeadaptar.get_best_task('prova','10/03/2024')

# redeNeural.update_saida()
# #rede = RedeAdapter("ChronosGram/ServidorWeb/banco.db")
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
firebase_admin.get_app()
ref = db.reference("/tarefas")
list_taks_saves = ref.get()
columns = [desc for desc in list_taks_saves]
df = pd.DataFrame(list_taks_saves, columns=columns)
df = df.T
# select = []
# meta = "prova"
# data_meta = "20/03/2024"
# for key,values in list_taks_saves.items(): # type: ignore
#     if((values['meta'] == meta) & (values['data_meta'] == data_meta)):
#         select.append(values)
# columns = ["assunto","data_meta", "desgastes","id","indice_facilidade_disciplina","materia","material,estudo", "meta","nome","nota","recomendacoes","saida","status","tempo_ate_meta","tempo_estudado","tipo_material"]
# df = pd.DataFrame(select, columns=columns)
# print(df)
# df["saida"] = df["saida"].astype(float)
# df = df.sort_values(by = ["saida"], ascending=False)
# print(df.to_json)
# selecionar = (df['meta'] == {meta}) & (df['data_meta'] == {data_meta})
# df = df[selecionar]
redeneural = RedeNeural("ModeloIa")
new_values =  pd.DataFrame(redeneural.update_rede())
print(type(new_values))
print(df["saida"])
# df["saida"] = new_values
# print(df["saida"])



