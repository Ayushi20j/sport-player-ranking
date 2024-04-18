import boto3
import json
from flask import Flask, request
from flask_cors import CORS
from utils.api import *
from utils.data.swimming import SWIMMING_DATA
from utils.data.football import FOOTBALL
from utils.data.chess import CHESS_DATA
from routes.cricket import cricket_router


app = Flask(__name__)
CORS(app=app)

app.register_blueprint(cricket_router)

@app.route("/", methods=['GET'])
def cricket():
    return {'Hello' : 'World'}


@app.route("/football", methods=['GET'])
def football():
    
    return FOOTBALL

@app.route("/swimming")
def swimming():
    
    return SWIMMING_DATA

@app.route("/chess")
def chess():
    
    data = CHESS_DATA.get('results')
    newData = []
    
    for index, item in enumerate(data):
        player = {}
        player['name'] = item['fullname']
        player['nationality'] = item['country_abbr']
        player['rank'] = str(index+1)
        player['change'] = "0"
        newData.append(player)

    return newData


@app.route('/queue', methods=['POST'])
def add_to_queue():
    
    message_data = request.get_json()
    
    sqs = boto3.client('sqs', region_name='eu-west-1')
    
    queue_url = 'https://sqs.eu-west-1.amazonaws.com/250738637992/sport-ranking-queue-x22227041'
    response = sqs.send_message(QueueUrl=queue_url,DelaySeconds=10, MessageBody=json.dumps(message_data))
    
    return {'messageid' : str(response['MessageId'])}


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
