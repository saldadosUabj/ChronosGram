import sqlite3 as sql
from pydantic import BaseModel

class Tarefa(BaseModel):
    nome: str
    status: int
    assunto : str
    material_estudo : str
    tipo_material : int
    recomendacao : float
    qualidade : int
    horario : int
    prioridade : float
    data_inicio : int
    data_fim : int
    tempo_estimado : float
    posicao : int
    
class DadosRede(BaseModel):
    
    assunto : str
    data_limite : float
    

class RedeAdapter():
    
    def __init__(self, banco_dados):
        self.con = sql.connect(banco_dados,check_same_thread=False)
        self.cursor = self.con.cursor()
        
    def insert_task(self, tarefa):
        nome = tarefa.nome
        status = tarefa.status
        assunto = tarefa.assunto
        material_estudo = tarefa.material_estudo
        tipo_material = tarefa.tipo_material
        recomendacao = tarefa.recomendacao
        qualidade = tarefa.qualidade
        horario = tarefa.horario
        prioridade = tarefa.prioridade
        data_inicio = tarefa.data_inicio
        data_fim = tarefa.fim
        tempo_estimado = tarefa.tempo_estimado
        posicao = tarefa.posicao
        
        query = f"""INSERT INTO tarefa (nome, status, assunto, material_estudo, tipo_material, recomendacao, qualidade, horario, prioridade, data_inicio, data_fim, tempo_estimado, posicao) VALUES
                    ('{nome}', '{status}','{assunto}','{material_estudo}','{tipo_material}','{recomendacao}','{qualidade}','{horario}','{prioridade}','{data_inicio}','{data_fim}','{tempo_estimado}','{posicao}')
        """
        self.cursor.execute(query)
        self.con.commit()
        
    def insert_dataNerual(self, dado):
      
        assunto = dado.assunto
        data_limite = dado.data_limite
        
        query = f"""INSERT INTO neural (assunto, data_limite) VALUES
                    ('{assunto}', '{data_limite}')
        """
        self.cursor.execute(query)
        self.con.commit()
        
    def finalizar(self):
        self.con.close()