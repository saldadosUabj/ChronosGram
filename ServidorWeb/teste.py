import RedeAdapter
# Criando uma instância da classe RedeAdapter
rede = RedeAdapter.RedeAdapter('banco.db')

# Criando uma instância da classe Tarefa
nova_tarefa = RedeAdapter.DadosRede(assunto='Derivadas', data_limite=10)

# Inserindo a nova tarefa no banco de dados
# rede.insert_task(nova_tarefa)
rede.insert_dataNerual(nova_tarefa)
# Fechando a conexão com o banco de dados
rede.finalizar()
