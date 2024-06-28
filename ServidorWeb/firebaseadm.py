import uuid
import firebase_admin
import hashlib
from firebase_admin import db
from firebasedefault import Default

class FirebaseAdm:
    def __init__(self) :
        firebase_admin.get_app()

    def hash_password(self, password):
        return hashlib.sha256(password.encode()).hexdigest()

    def generate_unique_id(self, collection_name):
        while True:
            new_id = str(uuid.uuid4())
            ref = db.reference(collection_name).child(new_id)
            if not ref.get():
                return new_id

    def get_users(self):
        ref = db.reference('users')
        return ref.get()

    def get_user(self, user_id):
        ref = db.reference('users').child(user_id)
        return ref.get()

    def add_user(self, user_data):
        user_data["senha"] = self.hash_password(user_data["senha"])
        user_id = self.generate_unique_id('users')
        ref = db.reference('users').child(user_id)
        ref.set(user_data)
        return user_id

    def update_user(self, user_id, user_data):
        if "senha" in user_data:
            user_data["senha"] = self.hash_password(user_data["senha"])
        ref = db.reference('users').child(user_id)
        ref.update(user_data)

    def delete_user(self, user_id):
        ref = db.reference('users').child(user_id)
        ref.delete()

    def get_tarefas(self):
        ref = db.reference('tarefas')
        return ref.get()

    def get_tarefa(self, tarefa_id):
        ref = db.reference('tarefas').child(tarefa_id)
        return ref.get()

    def add_tarefa(self, tarefa_data):
        tarefa_id = self.generate_unique_id('tarefas')
        ref = db.reference('tarefas').child(tarefa_id)
        ref.set(tarefa_data)
        return tarefa_id

    def update_tarefa(self, tarefa_id, tarefa_data):
        ref = db.reference('tarefas').child(tarefa_id)
        ref.update(tarefa_data)

    def delete_tarefa(self, tarefa_id):
        ref = db.reference('tarefas').child(tarefa_id)
        ref.delete()