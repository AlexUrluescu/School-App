
from aiModelClass import AskChat

from flask import Flask, render_template
from flask_socketio import SocketIO
from time import time

app = Flask(__name__)
socket_io = SocketIO(app, cors_allowed_origins="*")


a = AskChat()

database = "C:/Users/Alex/OneDrive/Documente/PersonalRepos/AI/LangChain/AzureCognitiveSearch/personal-database"

@socket_io.on('connect')
def handle_connect():
    print('new connection')

@socket_io.on('to-server')
def handle_to_server(query):
    print(f'new to-server event: {query}')

    answer = a.answering(database, query)

    # print(answer)
    socket_io.emit('from-server', f"primit mesajul: {answer}")

if __name__ == '__main__':
    socket_io.run(app, port=50000)