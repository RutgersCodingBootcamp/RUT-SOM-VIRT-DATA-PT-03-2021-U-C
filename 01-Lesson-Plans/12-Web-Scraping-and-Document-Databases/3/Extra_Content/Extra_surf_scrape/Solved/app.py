from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import scrape_surfing


app = Flask(__name__)


mongo = PyMongo(app, uri="mongodb://localhost:27017/surfing_app")


@app.route('/')
def index():
    surfing = mongo.db.surfing.find_one()
    return render_template('index.html', surfing=surfing)


@app.route('/scrape')
def scrape():
    surfing = mongo.db.surfing
    data = scrape_surfing.scrape()
    surfing.update(
        {},
        data,
        upsert=True
    )
    return redirect("/", code=302)


if __name__ == "__main__":
    app.run(debug=True)
