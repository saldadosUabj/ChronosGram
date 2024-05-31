from curses import meta
import firebase_admin
from firebase_admin import credentials, db
import pandas as pd


class FirebaseAdm():
        cred = credentials.Certificate(
        "chronosgram-b6288-firebase-adminsdk-rvgjf-74165c4cc3.json")
        default_app = firebase_admin.initialize_app(cred, {
        'databaseURL': "https://banco-usuario-default-rtdb.firebaseio.com/"
        })
            
        def tabela(tabela):
            ref = db.reference("/{tabela}")
            return ref
            





# with open("ServidorWeb/testefirebase.json", "r") as read:
#     file_contents = json.load(read)

# ref.set(file_contents)
# tarefas = ref.get()
# print(tarefas)
# columns = [desc for desc in tarefas]
# df = pd.DataFrame(tarefas, columns=columns)
# df =df.T
# df = df[['meta', 'data_meta', 'saida']]
# selecionar = (df['meta'] == 'prova') & (df['data_meta'] == "15/04/2024")
# df = df[selecionar]
# df = df.sort_values(by = "saida", ascending=True)
# print(df.to_json())


# def dataframeTarefas():
#     list_taks_saves = ref.get()
#     columns = [desc for desc in list_taks_saves]
#     df = pd.DataFrame(list_taks_saves, columns=columns)
#     return df.T


# print(dataframeTarefas())
# df = dataframeTarefas()
# df.loc


# conn = sqlite3.connect('ServidorWeb/banco.db')
# cursor = conn.cursor()
# cursor.execute("SELECT * FROM tarefas")
# rows = cursor.fetchall()

# for row in rows:
#     doc_data = {
#         'meta': row[1],
#         'data_meta': row[2],
#         'nome': row[3],
#         'status': row[4],
#         'assunto': row[5],
#         'material_estudo': row[6],
#         'materia': row[7],
#         'tempo_ate_meta': row[8],
#         'tempo_livre_estudo': row[9],
#         'tipo_material': row[10],
#         'nota': row[11],
#         'tempo_estudado': row[12],
#         'indice_facilidade_disciplina': row[13],
#         'recomendacao': row[14],
#         'desgastes': row[15],
#         'saida': row[16]
#     }


#     ref.child(str(uuid.uuid1())).set(doc_data)

# conn.close()

# print("Dados transferidos com sucesso!")
