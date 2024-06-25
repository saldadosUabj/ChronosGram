from pydantic import BaseModel

class Tarefa(BaseModel):
    id: str
    meta: str
    data_meta: str
    nome: str
    status: str
    assunto: str
    material_estudo: str
    materia: str
    tempo_ate_meta: str
    tipo_material: str
    nota: str
    tempo_estudado: str
    indice_facilidade_disciplina: str
    recomendacoes: str
    desgastes: str
    saida: str

class TarefaUpdate(BaseModel):
    meta: str
    data_meta: str
    nome: str
    status: str
    assunto: str
    material_estudo: str
    materia: str
    tempo_ate_meta: str
    tipo_material: str
    nota: str
    tempo_estudado: str
    indice_facilidade_disciplina: str
    recomendacoes: str
    desgastes: str
    saida: str
