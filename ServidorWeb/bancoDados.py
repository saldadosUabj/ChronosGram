import sqlite3

conn = sqlite3.connect('banco.db')

cursor = conn.cursor()

queryTarefa = ("""CREATE TABLE IF NOT EXISTS tarefas (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT,
                status INTEGER,
                assunto TEXT,
                material_estudo TEXT,
                tipo_material INTEGER,
                recomendacao REAL,
                qualidade INTEGER,
                horario INTEGER,
                prioridade REAL,
                data_inicio TEXT,
                data_fim TEXT,
                tempo_estimado REAL,
                posicao INTEGER
);
""") 
queryNeural = ("""CREATE TABLE IF NOT EXISTS neural (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT,
                status INTEGER,
                assunto TEXT,
                material_estudo TEXT,
                tipo_material INTEGER,
                recomendacao REAL,
                qualidade INTEGER,
                horario INTEGER,
                prioridade REAL,
                data_inicio TEXT,
                data_fim TEXT,
                tempo_estimado REAL,
                posicao INTEGER
);
""") 

# """)


# cursor.execute(queryTarefa)
#cursor.execute(queryNeural)

#cursor.execute(queryTarefa)
cursor.execute(queryNeural)
#Inserir dados aleatórios na tabela neural 
# cursor.execute(queryDelete)

conn.commit()
cursor.close()
conn.close()