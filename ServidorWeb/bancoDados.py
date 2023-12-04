import sqlite3

conn = sqlite3.connect('banco.db')

cursor = conn.cursor()

# queryTarefa = ("""CREATE TABLE IF NOT EXISTS tarefa ( 
#                id INTEGER  PRIMARY KEY,
#                nome TEXT NOT NULL, 
#                status INTEGER)
# """) 

queryNeural = ("""CREATE TABLE IF NOT EXISTS neural ( 
               id INTEGER PRIMARY KEY,
               assunto TEXT NOT NULL, 
               data_limite FLOAT)
""") 

#cursor.execute(queryTarefa)
cursor.execute(queryNeural)

# queryDelete = ("""DROP TABLE neural
               
# """)

# cursor.execute(queryDelete)

conn.commit()
cursor.close()
conn.close()