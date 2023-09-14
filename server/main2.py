
from aiModelClass import AskChat
from aiAzureModel import AskAzure

from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin  # Import Flask-CORS
app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# a = AskChat()
chat = AskAzure()

# database = "C:/Users/Alex/OneDrive/Documente/PersonalRepos/AI/LangChain/AzureCognitiveSearch/personal-database"

# db_conti = "C:/Users/uif94707/Documents/myProjects/School-App/School-App/server/conti-database"


@app.after_request
def add_cors_headers(response):
    # Allow requests from any origin
    response.headers['Access-Control-Allow-Origin'] = '*'

    # Allow specific HTTP methods
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'

    # Allow specific HTTP headers in the request
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'

    return response


@app.route('/chat', methods=['POST']) 
def handle_to_server():
    query = request.json
    print(query)

    answer = chat.answering(query["message"])

    chatMessage = {"role": "chat", "message": answer}

    print(chatMessage)

    return jsonify(chatMessage)


if __name__ == '__main__':
    app.run( port=50000, debug = True )