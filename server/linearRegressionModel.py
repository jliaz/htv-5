from operator import xor
from sklearn import datasets
# from pydataset import data
import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
# from sklearn.model_selection import train_test_split
from matplotlib import pyplot as plt
import csv

filepath = "/Users/ansel/Desktop/HTV5/htv-5/server/sample.csv"
x_coord_name = "percasian"
y_coord_name = "percwhite"

def getRegressionLine():
    info_matrix = []

    # with open(filepath, newline='') as csvfile:
    #     spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')
    #     for row in spamreader:
    #         info_matrix.append(', '.join(row))

    df = df = pd.read_csv(filepath)

    info_matrix=df.T

    print(info_matrix)

    headers = list(df.columns)

    print(headers)

    # print(info_matrix.T["county"])

    # print(df[2])


    x_coord_name = "percasian"
    y_coord_name = "percwhite"

    x = info_matrix.T[x_coord_name].to_numpy()
    y = info_matrix.T[y_coord_name].to_numpy()

    print(x)
    print(y)

    x = x.reshape(-1, 1)
    y = y.reshape(-1, 1)

    model = LinearRegression()
    model.fit(x,y)

    linear_regression_line = str(int(model.coef_)) + "X" + "+" + str(int(model.intercept_)) 

    # print(linear_regression_line)

    return linear_regression_line

if __name__ == "__main__":
    line = getRegressionLine()