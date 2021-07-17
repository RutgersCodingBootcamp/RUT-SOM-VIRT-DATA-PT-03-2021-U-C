from flask import Flask, render_template, jsonify
import pandas as pd
from sqlalchemy import create_engine


# Create app instance
app = Flask(__name__)
engine = create_engine("sqlite:///iris.sqlite")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/petal-length")
def petals():

    df = pd.read_sql(""" SELECT PetalLengthCm, Species FROM Iris; """, engine)
    petal_lengths = df.PetalLengthCm.to_list()
    return jsonify(petal_lengths)

# @app.route("/petal-species/<species>")
# def petals_species(species):

#     df = pd.read_sql(f""" SELECT PetalLengthCm, Species 
#                         FROM Iris
#                         WHERE Species = '{species}'; """, engine)
#     petal_lengths = df.PetalLengthCm.to_list()
#     return jsonify(petal_lengths)



if __name__ == "__main__":
    app.run(debug=True)
