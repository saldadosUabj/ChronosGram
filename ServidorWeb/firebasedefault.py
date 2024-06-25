
import os
import firebase_admin
from firebase_admin import credentials, db

class Default():
    current_dir = os.path.dirname(__file__)
    cred_path = os.path.join(current_dir, "FBSDK.json")
    cred = credentials.Certificate(cred_path)
    default_app = firebase_admin.initialize_app(cred, {
            'databaseURL': "https://banco-usuario-default-rtdb.firebaseio.com/"
        })