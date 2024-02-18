import sqlite3

conn = sqlite3.connect('banco.db')

cursor = conn.cursor()

# queryTarefa = ("""CREATE TABLE IF NOT EXISTS tarefas (
#                 id INTEGER PRIMARY KEY AUTOINCREMENT,
#                 nome TEXT,
#                 status INTEGER,
#                 assunto TEXT,
#                 material_estudo TEXT,
#                 tipo_material INTEGER,
#                 recomendacao REAL,
#                 qualidade INTEGER,
#                 horario INTEGER,
#                 prioridade REAL,
#                 data_inicio TEXT,
#                 data_fim TEXT,
#                 tempo_estimado REAL,
#                 posicao INTEGER
# );
# """) 
queryTarefa = ("""CREATE TABLE IF NOT EXISTS tarefas (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT,
                status INTEGER,
                assunto TEXT,
                material_estudo TEXT,
                tempo_ate_meta  DATETIME,
                tempo_livre_estudo INTEGER,
                tipo_material INTEGER,
                nota INTEGER,
                tempo_estudado INTEGER,
                indice_facilidade_disciplina INTEGER,
                desgastes FLOAT,
                saida FLOAT

);
""") 
# queryNeural = ("""CREATE TABLE IF NOT EXISTS neural (
#                 id INTEGER PRIMARY KEY AUTOINCREMENT,
#                 nome TEXT,
#                 status INTEGER,
#                 assunto TEXT,
#                 material_estudo TEXT,
#                 tipo_material INTEGER,
#                 recomendacao REAL,
#                 qualidade INTEGER,
#                 horario INTEGER,
#                 prioridade REAL,
#                 data_inicio TEXT,
#                 data_fim TEXT,
#                 tempo_estimado REAL,
#                 posicao INTEGER
# );
# """) 

queryNeural = ("""CREATE TABLE IF NOT EXISTS neural (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT,
                status INTEGER,
                assunto TEXT,
                material_estudo TEXT,
                tempo_ate_meta  DATETIME,
                tempo_livre_estudo INTEGER,
                tipo_material INTEGER,
                nota INTEGER,
                tempo_estudado INTEGER,
                indice_facilidade_disciplina INTEGER,
                desgastes FLOAT,
                saida FLOAT

);
""")

# """)

#cursor.execute("""DROP TABLE neural""")
#ursor.execute("""DROP TABLE tarefas""")
#cursor.execute(""" DROP TABLE sqlite_sequence""")


cursor.execute(queryTarefa)
cursor.execute(queryNeural)

#Inserir dados aleatórios na tabela neural 
# cursor.execute(queryDelete)

conn.commit()
cursor.close()
conn.close()