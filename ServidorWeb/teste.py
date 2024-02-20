from datetime import datetime
from unittest import result
from RedeNeural import RedeNeural
# from RedeAdapter import RedeAdapter
import sqlite3 as sql
#Redeadaptar = RedeAdapter("banco.db")
#redeNeural = RedeNeural("C:/Users/vini_/OneDrive/Desktop/Projeto Interdisciplinar 3/Projeto/ChronosGram/ModeloIa","banco.db")
#print(redeNeural.prediz())
#redeNeural.update_saida()
# #rede = RedeAdapter("ChronosGram/ServidorWeb/banco.db")
#con = sql.connect("banco.db", check_same_thread=False)
#cursor = con.cursor()
data_entrega = "22/02/2024"
formato_string = "%d/%m/%Y"
data_entrega = datetime.strptime(data_entrega,formato_string) #type:ignore
data_today = datetime.today()
resultado = abs(data_entrega - data_today).days
print(resultado)

# queryTarefa = ("""CREATE TABLE IF NOT EXISTS tarefas (
#                 id INTEGER PRIMARY KEY AUTOINCREMENT,
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
# query = f"""INSERT INTO tarefas (nome, status, assunto, material_estudo, materia, tempo_ate_meta, tempo_livre_estudo, tipo_material, nota, tempo_estudado, indice_facilidade_disciplina,recomendacao,desgastes) VALUES
#                       ('{'a'}', '{10}','{'b'}','{"oi"}','{"boa"}','{10}', '{2}','{2}','{4}','{2}','{5}','{2}','{8}')
#          """

# cursor.execute(query)
# con.commit()#redeadaptar.get_task()
