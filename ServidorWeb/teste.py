from datetime import datetime
from unittest import result

import pandas as pd
from RedeNeural import RedeNeural
from RedeAdapter import RedeAdapter
import sqlite3 as sql
from firebase_admin import db
# 
# Redeadaptar = RedeAdapter("banco.db")
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


