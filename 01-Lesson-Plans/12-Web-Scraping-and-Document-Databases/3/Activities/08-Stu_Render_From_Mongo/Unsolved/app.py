from flask import Flask, render_template
import pymongo

app = Flask(__name__)

# @TODO: setup mongo connection


# @TODO: connect to mongo db and collection


@app.route('/')
def index():
    # @TODO: write a statement that finds all the items in the db and sets it to a variable
    # CODE GOES HERE

    # @TODO: render an index.html template and pass it the data you retrieved from the database
    return


if __name__ == "__main__":
    app.run(debug=True)
