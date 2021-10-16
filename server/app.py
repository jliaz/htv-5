from flask import Flask
from flask import jsonify



app = Flask(__name__)


@app.route('/get', methods = ['GET'])
def get_articles():
    return jsonify({'Hello':"world"})


if __name__ == "__main__":
    app.run(debug=True) 