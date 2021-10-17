from flask import Flask, jsonify, request, Response
from flask_marshmallow import Marshmallow
import linearRegressionModel as lrm


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


@app.route('/getLinearRegression', methods = ['GET'])
def posts_dataset():

    dataset_loc = request.json['dataset_loc']

    x_coord_name = request.json['x_coord_name']
    y_coord_name = request.json['y_coord_name']


    return_obj = {}

    return_obj["linearReg"] = lrm.getRegressionLine(dataset_loc, x_coord_name, y_coord_name)
    return jsonify(return_obj)

@app.route('/getDatasetLoc', methods = ['GET'])
def get_dataset():

    return jsonify(dataset_loc)

if __name__ == "__main__":
    app.run(debug=True) 