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
