import sqlite3 as sql
from pydantic import BaseModel

class Tarefa(BaseModel):
    nome: str
    status: int
    
    
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
        
        query = f"""INSERT INTO tarefa (nome, status) VALUES
                    ('{nome}', '{status}')
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