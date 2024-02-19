from RedeNeural import RedeNeural
#from RedeAdapter import RedeAdapter
import sqlite3 as sql
# #redeadaptar = RedeAdapter("banco.db")
redeNeural = RedeNeural("ChronosGram/ModeloIa", "ChronosGram/ServidorWeb/banco.db")
print(redeNeural.prediz())
# #rede = RedeAdapter("ChronosGram/ServidorWeb/banco.db")
#con = sql.connect("ChronosGram/ServidorWeb/banco.db", check_same_thread=False)
#cursor = con.cursor()

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
