from flask import Flask, jsonify, request, Response
from flask_marshmallow import Marshmallow
import linearRegressionModel as lrm
import requests


app = Flask(__name__)

ma = Marshmallow(app)

###obj 

class Articles ():
    id = ""
    title = ""
    data = []

    def __init__(self, title, data):
        self.title = title
        self.data = data


#Schema
class ArticleSchema(ma.Schema):
    class DataObj:
        fields = ('id', 'title', 'data')

article_schema = ArticleSchema()
# articles_schema = ArticleSchema(many=True) # for large dataset

global_articles = {}


@app.route('/getTest', methods = ['GET'])
def get_test():
    return jsonify({'Hello':"world"})



@app.route('/getArticles', methods = ['GET'])
def get_articles():
    return jsonify(global_articles)

@app.route('/addArticle', methods = ['POST'])
def add_data():
    title = request.json['title']
    data = request.json['data']

    # articles = Articles(title, data)
    global_articles[title] = data

    return Response(status = 201)

@app.route('/basicCalculationGet', methods = ['GET'])
def basic_calc():
    total = 0

    for key in global_articles:
        for num in global_articles.get(key):
            total += num

    print(total)

    # dict = {'he':'ho'}

    # dict = [{'he',str(total)}]

    if(total == 0):
        return Response(status = 400)
    # return Response(total, status = 200)
    return jsonify(total)


# endpoints for dataset

dataset_loc = ""
x_coord_name = ""
y_coord_name = ""


@app.route('/getLinearRegressionFromPath', methods = ['GET'])
def posts_dataset_from_file():

    dataset_loc = request.json['dataset_loc']

    x_coord_name = request.json['x_coord_name']
    y_coord_name = request.json['y_coord_name']


    return_obj = {}

    return_obj["linearReg"] = lrm.getRegressionLine(dataset_loc, x_coord_name, y_coord_name)
    return jsonify(return_obj)


@app.route('/getLinearRegression', methods = ['GET'])
def posts_dataset():

    json_data = request.json['json_data']

    x_coord_name = request.json['x_coord_name']
    y_coord_name = request.json['y_coord_name']


    return_obj = {}

    return_obj["linearReg"] = lrm.getRegressionLineJson(json_data, x_coord_name, y_coord_name)
    return jsonify(return_obj)


@app.route('/getDatasetLoc', methods = ['GET'])
def get_dataset():

    return jsonify(dataset_loc)

@app.route('/callAssemblyAi', methods = ['GET'])
def callAssemblyAi():

    endpoint = "https://api.assemblyai.com/v2/transcript"

    json = {
    "audio_url": "https://s3-us-west-2.amazonaws.com/blog.assemblyai.com/audio/8-7-2018-post/7510.mp3"
    }

    headers = {
        "authorization": "7d077f67b1f24ba59e44adab26ac5d3a",
        "content-type": "application/json"
    }

    response = requests.post(endpoint, json=json, headers=headers)

    print(response.json())

    return Response(status = 200)

if __name__ == "__main__":
    app.run(debug=True) 