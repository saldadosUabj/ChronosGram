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
                tempo_ate_meta  DATETIME,
                tempo_livre_estudo INT,
                tipo_material INT,
                nota INT,
                tempo_estudado INT,
                indice_facilidade_disciplina INT
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
                tempo_ate_meta  DATETIME,
                tempo_livre_estudo INT,
                tipo_material INT,
                nota INT,
                tempo_estudado INT,
                indice_facilidade_disciplina INT
);
""")

# """)

#cursor.execute("""DROP TABLE neural""")
#cursor.execute("""DROP TABLE tarefas""")
cursor.execute(""" DROP TABLE sqlite_sequence""")


#cursor.execute(queryTarefa)
#cursor.execute(queryNeural)

#Inserir dados aleatórios na tabela neural 
# cursor.execute(queryDelete)

conn.commit()
cursor.close()
conn.close()