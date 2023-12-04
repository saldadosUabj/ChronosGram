import sqlite3

conn = sqlite3.connect('banco.db')

cursor = conn.cursor()

# queryTarefa = ("""CREATE TABLE IF NOT EXISTS tarefa ( 
#                id INTEGER  PRIMARY KEY,
#                nome TEXT NOT NULL, 
#                status TEXT,
#                 assunto TEXT,
#                 material_estudo TEXT,
#                 tipo_material TEXT,
#                 recomendacao FLOAT,
#                 qualidade FLOAT,
#                 pontuacao FLOAT,
#                 horario TEXT,
#                 prioridade FLOAT,
#                 data_inicio TEXT,
#                 tempo_remanescente TEXT,
#                 tempo_estimado TEXT,
#                 posicao FLOAT)
# """) 
queryInsert = ("""INSERT INTO tarefa (nome, status, assunto, material_estudo, tipo_material, recomendacao, qualidade, pontuacao, horario, prioridade, data_inicio, tempo_remanescente, tempo_estimado, posicao)
VALUES
('Introdução ao Capítulo 1', '50%', 'Definição de Função e Suas Propriedades', 'Livro "Cálculo" - Páginas 1 a 15', 'Leitura', 8, 9, 7, 'Manhã', 8, '2023-02-01', '2023-02-05', '40 minutos', 2),
('Videoaula: Introdução às Funções', '80%', 'Definição de Função e Suas Propriedades', 'Canal X (Inserir link)', 'Vídeoaula', 9, 8, 6, '2023-02-01', '7', '2023-02-02', '2023-02-07', '30 minutos', 1),
('Exercícios 1 a 5 - Seção 1.1', '40%', 'Definição de Função e Suas Propriedades', 'Livro "Cálculo" - Seção 1.1', 'Exercícios', 7, 7, 8, 'Noite', 9, '2023-02-06', '2023-02-10', '25 minutos', 3),
('Notação de Função e Como Interpretá-la', '60%', 'Notação de Função e Como Interpretá-la', 'Livro "Cálculo" - Seções 1.1 e 1.2', 'Leitura', 8, 8, 7, 'Manhã', 8, '2023-02-08', '2023-02-12', '35 minutos', 6),
('Videoaula: Notação de Funções', '75%', 'Notação de Função e Como Interpretá-la', 'Canal Y (Inserir link)', 'Vídeoaula', 9, 8, 5, 'Tarde', 7, '2023-02-09', '2023-02-14', '30 minutos', 4),
('Exercícios 6 a 10 - Seção 1.1', '30%', 'Notação de Função e Como Interpretá-la', 'Livro "Cálculo" - Seção 1.1', 'Exercícios', 7, 7, 8, 'Noite', 9, '2023-02-13', '2023-02-17', '25 minutos', 5),
('Cálculo de Limites - Seção 1.3', '20%', 'Limites e Como Calculá-los', 'Livro "Cálculo" - Seção 1.3', 'Leitura', 6, 6, 9, 'Manhã', 9, '2023-02-15', '2023-02-19', '20 minutos', 9),
('Videoaula: Limites Básicos', '40%', 'Limites e Como Calculá-los', 'Canal Z (Inserir link)', 'Vídeoaula', 8, 7, 6, 'Tarde', 8, '2023-02-16', '2023-02-21', '30 minutos', 7),
('Exercícios 1 a 8 - Seção 1.3', '10%', 'Limites e Como Calculá-los', 'Livro "Cálculo" - Seção 1.3', 'Exercícios', 5, 5, 8, 'Noite', 9, '2023-02-20', '2023-02-24', '20 minutos', 8),
('Revisão de Slides - Definição de Derivada', '0%', 'Definição de Derivada', 'Slides da aula sobre definição de derivada', 'Revisão', 6, 3, 3, 'Manhã', 4, '2023-02-22', '2023-02-26', '40 minutos', 12),
('Definição de Derivada e Sua Interpretação Geométrica - Leitura', '20%', 'Seção 2.1 sobre derivadas do livro', 'Livro "Cálculo" - Seção 2.1', 'Leitura', 6, 6, 9, 'Manhã', 9, '2023-03-10', '2023-03-14', '20 minutos', 11),
('Videoaula: Definição e Interpretação Geométrica de Derivada', '40%', 'Definição de Derivada e Sua Interpretação Geométrica', 'Canal A (Inserir link)', 'Vídeoaula', 8, 7, 6, 'Tarde', 8, '2023-03-11', '2023-03-16', '30 minutos', 10),
('Exercícios 1 a 5 - Seção 2.1', '10%', 'Definição de Derivada e Sua Interpretação Geométrica', 'Livro "Cálculo" - Seção 2.1', 'Exercícios', 5, 5, 8, 'Noite', 9, '2023-03-15', '2023-03-19', '20 minutos', 13),
('Revisão de Slides - Definição de Derivada', '0%', 'Definição de Derivada e Sua Interpretação Geométrica', 'Slides relacionados à definição de derivada', 'Revisão', 1, 0, 3, 'Manhã', 4, '2023-03-17', '2023-03-21', '15 minutos', 14);

""")

# queryNeural = ("""CREATE TABLE IF NOT EXISTS neural ( 
#                id INTEGER PRIMARY KEY,
#                assunto TEXT NOT NULL, 
#                data_limite FLOAT)
# """) 

# queryDelete = ("""DROP TABLE tarefa
               
# """)


# cursor.execute(queryTarefa)
#cursor.execute(queryNeural)

cursor.execute(queryInsert)

# cursor.execute(queryDelete)

conn.commit()
cursor.close()
conn.close()