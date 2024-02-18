# Código para ser desenvolvido na feature

from datetime import datetime
from fastapi import FastAPI
from pydantic import BaseModel
import sqlite3 as sql
from RedeAdapter import RedeAdapter
from RedeNeural import RedeNeural


class user(BaseModel):
    id: int
    nome: str
    turno_livre: str
    email: str
    senha: str


class Tarefa(BaseModel):
    # nome: str
    # status: int
    # assunto : str
    # material_estudo : str
    # tipo_material : int
    # recomendacao : float
    # qualidade : int
    # horario : int
    # prioridade : float
    # data_inicio : str
    # data_fim : str
    # tempo_estimado : float
    # posicao : int
    tempo_ate_meta: datetime
    tempo_livre_estudo: int
    tipo_material: int
    nota: int
    tempo_estudado: int
    indice_facilidade_disciplina: int


class Neural(BaseModel):

    # nome: str
    # status: int
    # assunto : str
    # material_estudo : str
    # tipo_material : int
    # recomendacao : float
    # qualidade : int
    # horario : int
    # prioridade : float
    # data_inicio : str
    # data_fim : str
    # tempo_estimado : float
    # posicao : int
    tempo_ate_meta: datetime
    tempo_livre_estudo: int
    tipo_material: int
    nota: int
    tempo_estudado: int
    indice_facilidade_disciplina: int


app = FastAPI()
banco = RedeAdapter("banco.db")
rede_neural = RedeNeural("./", "banco.db")

alunos = [
    {
        'Nome': 'Introdução ao Capítulo 1',
        'Status': '50%',
        'Assunto': 'Definição de Função e Suas Propriedades',
        'Material de Estudo': 'Livro "Cálculo" - Páginas 1 a 15',
        'Tipo': 1,
        'Recomendações': 8,
        'Qualidade': 9,
        'Pontuação': 7,
        'Horário': 1,
        'Prioridade': 8,
        'Data Início': '2023-02-01',
        'Data Final': '2023-02-05',
        'Tempo Estimado': 40,
        'posição': 2
    },
    {
        'Nome': 'Videoaula: Introdução às Funções',
        'Status': '80%',
        'Assunto': 'Definição de Função e Suas Propriedades',
        'Material de Estudo': 'Canal X (Inserir link)',
        'Tipo': 2,
        'Recomendações': 9,
        'Qualidade': 8,
        'Pontuação': 6,
        'Horário': 2,
        'Prioridade': 7,
        'Data Início': '2023-02-02',
        'Data Final': '2023-02-07',
        'Tempo Estimado': 30,
        'posição': 1
    },
    {
        'Nome': 'Exercícios 1 a 5 - Seção 1.1',
        'Status': '40%',
        'Assunto': 'Definição de Função e Suas Propriedades',
        'Material de Estudo': 'Livro "Cálculo" - Seção 1.1',
        'Tipo': 3,
        'Recomendações': 7,
        'Qualidade': 7,
        'Pontuação': 8,
        'Horário': 3,
        'Prioridade': 9,
        'Data Início': '2023-02-06',
        'Data Final': '2023-02-10',
        'Tempo Estimado': 25,
        'posição': 3
    },
    {
        'Nome': 'Notação de Função e Como Interpretá-la',
        'Status': '60%',
        'Assunto': 'Notação de Função e Como Interpretá-la',
        'Material de Estudo': 'Livro "Cálculo" - Seções 1.1 e 1.2',
        'Tipo': 1,
        'Recomendações': 8,
        'Qualidade': 8,
        'Pontuação': 7,
        'Horário': 1,
        'Prioridade': 8,
        'Data Início': '2023-02-08',
        'Data Final': '2023-02-12',
        'Tempo Estimado': 35,
        'posição': 6
    },
    {
        'Nome': 'Videoaula: Notação de Funções',
        'Status': '75%',
        'Assunto': 'Notação de Função e Como Interpretá-la',
        'Material de Estudo': 'Canal Y (Inserir link)',
        'Tipo': 2,
        'Recomendações': 9,
        'Qualidade': 8,
        'Pontuação': 5,
        'Horário': 2,
        'Prioridade': 7,
        'Data Início': '2023-02-09',
        'Data Final': '2023-02-14',
        'Tempo Estimado': 30,
        'posição': 4
    },
    {
        'Nome': 'Exercícios 6 a 10 - Seção 1.1',
        'Status': '30%',
        'Assunto': 'Notação de Função e Como Interpretá-la',
        'Material de Estudo': 'Livro "Cálculo" - Seção 1.1',
        'Tipo': 3,
        'Recomendações': 7,
        'Qualidade': 7,
        'Pontuação': 8,
        'Horário': 3,
        'Prioridade': 9,
        'Data Início': '2023-02-13',
        'Data Final': '2023-02-17',
        'Tempo Estimado': 25,
        'posição': 5
    },
    {
        'Nome': 'Cálculo de Limites - Seção 1.3',
        'Status': '20%',
        'Assunto': 'Limites e Como Calculá-los',
        'Material de Estudo': 'Livro "Cálculo" - Seção 1.3',
        'Tipo': 1,
        'Recomendações': 6,
        'Qualidade': 6,
        'Pontuação': 9,
        'Horário': 1,
        'Prioridade': 9,
        'Data Início': '2023-02-15',
        'Data Final': '2023-02-19',
        'Tempo Estimado': 20,
        'posição': 9
    },
    {
        'Nome': 'Videoaula: Limites Básicos',
        'Status': '40%',
        'Assunto': 'Limites e Como Calculá-los',
        'Material de Estudo': 'Canal Z (Inserir link)',
        'Tipo': 2,
        'Recomendações': 8,
        'Qualidade': 7,
        'Pontuação': 6,
        'Horário': 2,
        'Prioridade': 8,
        'Data Início': '2023-02-16',
        'Data Final': '2023-02-21',
        'Tempo Estimado': 30,
        'posição': 7
    },
    {
        'Nome': 'Exercícios 1 a 8 - Seção 1.3',
        'Status': '10%',
        'Assunto': 'Limites e Como Calculá-los',
        'Material de Estudo': 'Livro "Cálculo" - Seção 1.3',
        'Tipo': 3,
        'Recomendações': 5,
        'Qualidade': 5,
        'Pontuação': 8,
        'Horário': 3,
        'Prioridade': 9,
        'Data Início': '2023-02-20',
        'Data Final': '2023-02-24',
        'Tempo Estimado': 20,
        'posição': 8
    },
    {
        'Nome': 'Revisão de Slides - Definição de Derivada',
        'Status': '0%',
        'Assunto': 'Definição de Derivada',
        'Material de Estudo': 'Slides da aula sobre definição de derivada',
        'Tipo': 4,
        'Recomendações': 6,
        'Qualidade': 3,
        'Pontuação': 3,
        'Horário': 1,
        'Prioridade': 4,
        'Data Início': '2023-02-22',
        'Data Final': '2023-02-26',
        'Tempo Estimado': 40,
        'posição': 12
    },
    {
        'Nome': 'Definição de Derivada e Sua Interpretação Geométrica - Leitura',
        'Status': '20%',
        'Assunto': 'Seção 2.1 sobre derivadas do livro',
        'Material de Estudo': 'Livro "Cálculo" - Seção 2.1',
        'Tipo': 1,
        'Recomendações': 6,
        'Qualidade': 6,
        'Pontuação': 9,
        'Horário': 2,
        'Prioridade': 9,
        'Data Início': '2023-03-10',
        'Data Final': '2023-03-14',
        'Tempo Estimado': 20,
        'posição': 11
    },
    {
        'Nome': 'Videoaula: Definição e Interpretação Geométrica de Derivada',
        'Status': '40%',
        'Assunto': 'Definição de Derivada e Sua Interpretação Geométrica',
        'Material de Estudo': 'Canal A (Inserir link)',
        'Tipo': 2,
        'Recomendações': 8,
        'Qualidade': 7,
        'Pontuação': 6,
        'Horário': 3,
        'Prioridade': 8,
        'Data Início': '2023-03-11',
        'Data Final': '2023-03-16',
        'Tempo Estimado': 30,
        'posição': 10
    },
    {
        'Nome': 'Exercícios 1 a 5 - Seção 2.1',
        'Status': '10%',
        'Assunto': 'Definição de Derivada e Sua Interpretação Geométrica',
        'Material de Estudo': 'Livro "Cálculo" - Seção 2.1',
        'Tipo': 3,
        'Recomendações': 5,
        'Qualidade': 5,
        'Pontuação': 8,
        'Horário': 3,
        'Prioridade': 9,
        'Data Início': '2023-03-15',
        'Data Final': '2023-03-19',
        'Tempo Estimado': 20,
        'posição': 13
    },
    {
        'Nome': 'Revisão de Slides - Definição de Derivada',
        'Status': '0%',
        'Assunto': 'Definição de Derivada e Sua Interpretação Geométrica',
        'Material de Estudo': 'Slides relacionados à definição de derivada',
        'Tipo': 4,
        'Recomendações': 1,
        'Qualidade': 0,
        'Pontuação': 3,
        'Horário': 1,
        'Prioridade': 4,
        'Data Início': '2023-03-17',
        'Data Final': '2023-03-21',
        'Tempo Estimado': 15,
        'posição': 14
    }
]


@app.get("/tarefas")
def pesquisa():
    return alunos


@app.get("/user/{id}")
def pesquisa_id(id: int):
    for aluno in alunos:
        if aluno['id'] == id:
            return aluno
    return "not found"


@app.post("/user")
def inserir(info: user):
    alunos.append({
        "id": info.id,
        "nome": info.nome,
        "email": info.email,
        "senha": info.senha,
        "turno_livre": info.turno_livre
    })
    return alunos


@app.put("/user/id")
def atualizar(info: user, id: int):
    contador = 0
    for aluno in alunos:
        if aluno["id"] == id:
            alunos[contador] = {
                "id": info.id,
                "nome": info.nome,
                "email": info.email,
                "senha": info.senha,
                "turno_livre": info.turno_livre
            }
        return "atualizado"
        contador += 1
    return "produto inexistente"


@app.put("/redeNeural")
def insert_neural_data(dados: Neural):
    banco.insert_dataNerual(dados)
    banco.finalizar


@app.put("/tarefas")
def insert_tarefas(tarefa: Tarefa):
    print(tarefa)
    banco.insert_task(tarefa)
    banco.finalizar


# @app.get("/tarefas")
# def get_tarefa():
#     rede_neural.prediz()
