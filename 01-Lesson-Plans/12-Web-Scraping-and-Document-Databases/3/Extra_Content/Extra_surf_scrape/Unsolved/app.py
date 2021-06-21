from flask import Flask, render_template, jsonify
from flask_pymongo import PyMongo
import scrape_url

app = Flask(__name__)

mongo = PyMongo(app, uri="mongodb://localhost:27017/surfing_app")


@app.route('/')
def index():
    # @TODO
    # Create a route and view function that:
    # 1. returns one document from your mongo db
    # 2. renders an index.html template with that data
    # CODE GOES HERE
    return


@app.route('/scrape')
def scrape():
    # @TODO
    # 1. find the collection that you are going to insert scraped data to and set it to a variable.
    # 2. scrape your url here, and set it to a variable. Hint: You will be calling a function from scrape.py.
    # 3. update your database with your new data.
    # 4. redirect your url back to the route.
    return


if __name__ == "__main__":
    app.run(debug=True)
