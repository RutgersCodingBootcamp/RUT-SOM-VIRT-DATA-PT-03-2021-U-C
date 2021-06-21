# 12.3 Rendering Your Data With Flask

## Overview

Today's class will introduce students to rendering templates with Flask, teaching them everything they need to know to display their data on a webpage.

## Class Objectives

* Students will become comfortable rendering templates with Flask using data. retrieved from a Mongo database.
* Students will be able to use Beautiful Soup to scrape data.
* Students will use PyMongo to save data to a Mongo database.
* Students will use Flask to render templates.

## Instructor Prep

<details>
  <summary><strong>Instructor Priorities</strong></summary>

* Students should be able to create a Flask application that renders a static HTML template.
* Students should be able to create a Flask application that renders an HTML template with data.
* Students should be able to create a flask application that renders an HTML template with data from a Mongo database.
* Students should be able to create a flask application that combines web scraping, document databases, and templating with Flask.

</details>

<details>
  <summary><strong>Instructor Notes</strong></summary>

* You may find that this lesson falls on a weekday due to a holiday shifting the course schedule. In this case, we have provided notes within the LP that will allow you to **easily adjust the length of the lesson to fit into a weekday class**.

  * Be on the lookout for a ⏰ **3-Hour Adjustment** note at the top of activities in this Lesson Plan. If this class is being taught on a weekday, please utilize the directions found in the note. Keep in mind that breaks will be reduced from 40 minutes to the typical 15 minutes for a weekday class as well.

  * Shortening these activities could potentially limit the students' ability to finish them, so please remind them to utilize office hours to clear up any questions they may have.

* Please reference our [Student FAQ](../../../05-Instructor-Resources/README.md#Unit-12-web-scraping-and-document-databases) for answers to questions frequently asked by students of this program. If you have any recommendations for additional questions, feel free to log an issue or a pull request with your desired additions.

</details>

<details>
  <summary><strong>Sample Class Video</strong></summary>

* To view an example class lecture visit (Note video may not reflect latest lesson plan):<br> [Class Video: Part 1](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=82f006ac-60a5-468d-afbc-aa8200f8fe7b)<br>
[Class Video: Part 2](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7cd4ff7a-65c8-40b0-b415-aa820121b3fd)

</details>

- - -

# Class Activities

## 1. Welcome & Rendering a String With Flask

| Activity Time:       0:35 |  Elapsed Time:      0:35  |
|---------------------------|---------------------------|

<details>
  <summary><strong>📣 1.1 Instructor Do: Welcome Class (0:05)</strong></summary>

* Open the [slideshow](https://docs.google.com/presentation/d/1BWKWJoy_Cx2WXCZnBjZKTneoZr2l90MD5DQ8-B5m7NQ/edit?usp=sharing) and use slides 1 - 3 to welcome everyone to class, and take a moment to introduce students to today's objectives.

* Explain that, at the end of today's class, we will build a server that scrapes data; saves it to a database; and then renders that data to a webpage.

* Explain that we will begin by rendering a static HTML template in Flask, and gradually work our way to serving templates whose data is from a running Mongo database.

</details>

<details>
  <summary><strong>📣 1.2 Instructor Do: Intro To Flask Render (0:15)</strong></summary>

* Open the [slideshow](https://docs.google.com/presentation/d/1BWKWJoy_Cx2WXCZnBjZKTneoZr2l90MD5DQ8-B5m7NQ/edit?usp=sharing) and use slides 3 - 6 to  go over this unit with the class.

* This demonstration introduce the basics of rendering a template with Flask.

* To begin, navigate to [Activities/Solved/01-Ins_Render_String](Activities/01-Ins_Render_String/Solved), and run: `python app.py` then visit `http://127.0.0.1:5000/` in your browser.

* Next, open [Activities/Solved/01-Ins_Render_String/app.py](Activities/01-Ins_Render_String/Solved/app.py), and change the value of the `text` argument inside `render_template`.

  * Restart the application to show the text rendered on the page has changed.

  * Emphasize that we did _not_ change the HTML.

* Explain that using **templates** allows us to dynamically configure what is displayed in a "preconfigured" (i.e., templated) web page.

  * Point out that the value of `text` is determined dynamically—we could set it equal to the result of a function call or _database query_, for example, and generate web pages reflecting the result of the query or function call.

* Explain that today's lesson will begin with a closer look at this demonstration, and proceed with exercises on:

  * Rendering collections (dicts and lists) with Flask

  * Rendering views over MongoDB with Flask

  * Scraping data into MongoDB

* Remind students that a major impetus for the use of templates is that it allows us to keep our webpage markup separate from our server logic.

  * Explain that Flask expects templates stored in a top-level directory called `templates`.

```python
/app.py
/templates
    /index.html
```

* Begin by opening `templates/index.html`.

* Point out the line containing `{{ text }}`.

  * Explain that the double brackets mark a place where we can "plug in" a variable value for `text`.

**Example `index.html`**

```html
<body>
  <div>
    <!-- Render our data -->
    <h1>{{ text }}</h1>
  </div>
</body>
```

* Remind students that we can change what is displayed in `{{ text }}` by updating the code on our server.

* Open `app.py`, and emphasize the following.

  * We must either import `render_template` from `flask`, or refer to it as `flask.render_template`.

  * We call `render_template` with _only_ the filename of the template we want to render. This is possible because we've adhered to the convention of placing our templates in the `templates` directory.

  * We pass the string `"hurricanes are a comin"` as a _keyword argument_ to `render_template`. Point out that the keyword, `text`, corresponds to the value we placed in double brackets in `index.html`. This is how the server knows what data to use to "fill out" the template.

* Make sure to point where this file lives and where it looks for files to render.

**Example `app.py`**

```python
# Dependencies
from flask import Flask, render_template

# Create Flask app
app = Flask(__name)


# Create route that renders index.html template and takes in the static string "hurricanes are a comin".
@app.route("/")
def echo():
    return render_template("index.html", text="Serving up cool text from the Flask server!!")
```

* Take a moment to demonstrate the application again, and address any remaining questions before moving on.

</details>

<details>
  <summary><strong>✏️ 1.3 Students Do: Rendering A String With Flask (0:10)</strong></summary>

* Open the [slideshow](https://docs.google.com/presentation/d/1BWKWJoy_Cx2WXCZnBjZKTneoZr2l90MD5DQ8-B5m7NQ/edit?usp=sharing) and use slides 7 and 8 to present this activity to the class.

* **Files:**

* [02-Stu_Render_String/templates/index.html](Activities/02-Stu_Render_String/Unsolved/templates/index.html)

* [02-Stu_Render_String/templates/bonus.html](Activities/02-Stu_Render_String/Unsolved/templates/bonus.html)

* [02-Stu_Render_String/app.py](Activities/02-Stu_Render_String/Unsolved/app.py)

* **Instructions:**

* Create a webpage that will return a welcome message with a name returned from your flask app.

* Add a paragraph underneath to display a hobby of your own; this will also be returned from the back end..

* Create a link to a bonus page that routes you to an entirely new static html page and also returns both your name and hobby from the back end.

* **Bonus**

* Add a link back to the home page in your bonus page.

* **Hints**

* Consult the [Flask Render Docs](http://flask.pocoo.org/docs/0.12/quickstart/#rendering-templates) for reference.

</details>

<details>
  <summary><strong>⭐ 1.4 Review: Rendering A String (0:05)</strong></summary>

* Open the [slideshow](https://docs.google.com/presentation/d/1BWKWJoy_Cx2WXCZnBjZKTneoZr2l90MD5DQ8-B5m7NQ/edit?usp=sharing) and leave slide 9 open while reviewing the activity with the class.

* Open [02-Stu_Render_String/app.py](Activities/02-Stu_Render_String/Solved/app.py) and go through the code and explaining"

  * Import libraries and setup the Flask app.

  * A name and hobby variable are declared then used later in the templates.

  * One route is set to the `/` url. This will return the `index.html` template as well as the name and hobby variables used on the web page.

  * A second route is set to the `/bonus` url. This will return the `bonus.html` template along with the same variables as the other route.

* Next, open to [02-Stu_Render_String/index.html](Activities/02-Stu_Render_String/Solved/templates/index.html) and [02-Stu_Render_String/bonus.html](Activities/02-Stu_Render_String/Solved/templates/bonus.html) in an editor, explaining:

  * The variable are placed inside curly braces and passed from the Flask app.

  * A link to the route `bonus` which will hit the route on the backend to render the `bonus.html` template.

  * A similar approach is taken on the `bonus.html` page but this time a link is added to route back to `/`.

* Answer any questions before moving on.

</details>

<sub>[Having issues with this activity? Report a bug!](https://bit.ly/3aRc8MU)</sub>

- - -

## 2. Rendering a List

| Activity Time:       0:20 |  Elapsed Time:      0:55  |
|---------------------------|---------------------------|

<details>
  <summary><strong>📣 2.1 Instructor Do: Rendering A List (0:05)</strong></summary>

* Open the [slideshow](https://docs.google.com/presentation/d/1BWKWJoy_Cx2WXCZnBjZKTneoZr2l90MD5DQ8-B5m7NQ/edit?usp=sharing) and use slides 10 and 11 to present this unit to the class.

* Change into [Activities/03-Ins_Render_Lis/Solved](Activities/03-Ins_Render_List/Solved) and run `python app.py`.

* Explain to them that the setup is the same as rendering a string, but we will be manipulating a list instead of a simple string value. We are working our way up to rendering data from a Mongo database, and this will give you more practice with the basics.

* The main difference in this activity is we will be looping through the elements of a list. Open `app.py` to show a list can be passed and returned to a template.

```python
def index():
    team_list = ["Jumpers", "Dunkers", "Dribblers", "Passers"]
    return render_template("index.html", list=team_list)
```

* Next open the `index.html` and explain that a new syntax will allow a for loop to go through the list on the front end. This for loop will go through the list passed in the backend and create a new `<li>` for each name in the list.

```python
{% for name in list %}
  <li>{{ name }}</li>
{% endfor %}
```

* Emphasize that for code we are going to render to the page, we use the syntax: `{{ this will be displayed }}`

  * In particular, emphasize the double brackets, `{{...}}`.

* For code such as a loop, we use `{% this will not be displayed %}`

  * In particular, emphasize the "percent brackets", `{%...%}`.

  * Explain that "percent brackets" are used to implement logic within our templates.

  * Explain, to end a for loop `{% endfor %}` must be added at the end. Everything in between the percent brackets will be added to the webpage with each iteration of the loop.

* Identify the loop vs the `name` argument that will be rendered.

</details>

<details>
  <summary><strong>✏️ 2.2 Students Do: Rendering A List (0:10)</strong></summary>

* Open the [slideshow](https://docs.google.com/presentation/d/1BWKWJoy_Cx2WXCZnBjZKTneoZr2l90MD5DQ8-B5m7NQ/edit?usp=sharing) and use slides 12 and 13 to present this activity to the class.

* Run [04-Stu_Render_List/app.py](Activities/04-Stu_Render_List/Solved/app.py) in a terminal then visit local host to display what the students need to achieve. 'Explain that the server will return a list and the html page will loop through 'it and/to?' display a unique movie card for each movie in the list.

* **Files**

* [04-Stu_Render_List/index.html](Activities/04-Stu_Render_List/Unsolved/templates/index.html)

* **Instructions**

* Create a web page that will display a list of your top five favorite movies.

* Add style to your webpage by using [bootstrap cards](https://getbootstrap.com/docs/4.0/components/card/) add whatever info you like.

</details>

<details>
  <summary><strong>⭐ 2.3 Review: Rendering A List (0:05)</strong></summary>

* Open the [slideshow](https://docs.google.com/presentation/d/1BWKWJoy_Cx2WXCZnBjZKTneoZr2l90MD5DQ8-B5m7NQ/edit?usp=sharing) and leave slide 14 open while reviewing the activity with the class.

* Open [04-Stu_Render_List/templates/index.html](Activities/04-Stu_Render_List/Solved/templates/index.html) in an editor and go through the code. Be sure to explain:

  * To loop through the returned movie from the Flask app, percent brackets are used.

  * Additional code that is placed inside will also get duplicated.

  * When the server talks to a database this will be a way for a web page to create enough content.

</details>

<sub>[Having issues with this activity? Report a bug!](https://bit.ly/2JPa38h)</sub>

- - -

## 3. Rendering a Dictionary

| Activity Time:       0:25 |  Elapsed Time:      1:20  |
|---------------------------|---------------------------|

<details>
  <summary><strong>📣 3.1 Instructor Do: Rendering A Dictionary (0:05)</strong></summary>

* Open the [slideshow](https://docs.google.com/presentation/d/1BWKWJoy_Cx2WXCZnBjZKTneoZr2l90MD5DQ8-B5m7NQ/edit?usp=sharing) and use slides 15 and 16 to present this unit to the class.

* Change into [Activities/05-Ins_Render_Dict](Activities/05-Ins_Render_Dict/Solved) and run `python app.py`.

* Consider taking a minute to review lists vs dictionaries.

  * Check for understanding: "What is the difference between a list and a dict?

  * They should be able to tell you that **dictionaries have key, value pairs**.

* Explain that in this activity we are going to access the dictionary values by using dot notation.

**Example `app.py`**

```python
def index():
    player_dictionary = {"player_1": "Jessica",
                         "player_2": "Mark"}
    return render_template("index.html", dict=player_dictionary)
```

**Example `index.html`**

```html
<ul style="list-style: none;">
    <li>{{ dict.player_1 }}</li>
    <li>{{ dict.player_2 }}</li>
</ul>
```

* Check that they understand how we are accessing our data.

  * Point out the "formula" for retrieving data via dot notation: `<dict_name>.<key>`.

</details>

<details>
  <summary><strong>✏️ 3.2 Students Do: Rendering A Dictionary (0:15)</strong></summary>

* ⏰ **3-Hour Adjustment**: Reduce activity time to 10 minutes.

* Open the [slideshow](https://docs.google.com/presentation/d/1BWKWJoy_Cx2WXCZnBjZKTneoZr2l90MD5DQ8-B5m7NQ/edit?usp=sharing) and use slides 17 and 18 to present the activity to the class.

* First demo the what the students should be creating by running the [06-Stu_Render_Dict/app.py](Activities/06-Stu_Render_Dict/Solved/app.py) and going to local host on your browser.

* **Files**

* [06-Stu_Render_Dict/index.html](Activities/06-Stu_Render_Dict/Unsolved/templates/index.html)

* [06-Stu_Render_Dict/app.py](Activities/06-Stu_Render_Dict/Unsolved/app.py)

* **Instructions**

* Create a list of dictionaries that include the name and type of animal.

* Loop through the list and display an un ordered list on the webpage.

* Each line should include the name of the animal and type.

* Add some CSS styling to each list item.

</details>

<details>
  <summary><strong>⭐ 3.3 Review: Rendering A Dictionary Review (0:05)</strong></summary>

* Open the [slideshow](https://docs.google.com/presentation/d/1BWKWJoy_Cx2WXCZnBjZKTneoZr2l90MD5DQ8-B5m7NQ/edit?usp=sharing) and leave slide 19 open while reviewing the activity with the class.

* First, open up [06-Stu_Render_Dict/app.py](Activities/06-Stu_Render_Dict/Solved/app.py) and go through the code. Explaining as you go:

  * Create and setup a Flask instance.

  * Next create a list of dictionaries passed to the route.

  * Create a route that will return an `index.html` and a list of dictionaries.

* Next open up [06-Stu_Render_Dict/index.html](Activities/06-Stu_Render_Dict/Solved/templates/index.html) and go through the code. Explaining as you go:

  * Setup a for loop with the percent bracket notation.

  * Looping through a list of dictionaries is the same as any other list. Combine the dot notation to access a dictionary with the for loop to display both the name and type.

  * Finally, inline CSS is used here.  Note that using a separate CSS file will also work as long as it's referenced correctly.

</details>

<sub>[Having issues with this activity? Report a bug!](https://bit.ly/2UOW0pL)</sub>

- - -

## Break

| Activity Time:       0:40 |  Elapsed Time:      2:00  |
|---------------------------|---------------------------|

⏰ **3-Hour Adjustment**: Break will be 15 minutes.

- - -

## 4. Rendering Data from MongoDB

| Activity Time:       0:55 |  Elapsed Time:      2:55  |
|---------------------------|---------------------------|

<details>
  <summary><strong>📣 4.1 Instructor Do: Rendering Data From Mongodb (0:20)</strong></summary>

* Open the [slideshow](https://docs.google.com/presentation/d/1BWKWJoy_Cx2WXCZnBjZKTneoZr2l90MD5DQ8-B5m7NQ/edit?usp=sharing) and use slides 21 and 22 to present this unit to the class.

* The following are culminating activities which introduce MongoDB.

* The first thing we need to do is get Mongo running, after which we can launch our app.

* Next, students will put into practice everything they have done so far and now render data from a Mongo database. The first step is to get Mongo up and running by following the steps below

  * In  terminal run `mongod` to start the Mongo daemon.

  * Open another terminal tab and run `mongo` to start connect to `mongod`

  * In terminal run `show databases` to confirm connection and show a list of available local databases.

* Once connection to the local Mongo database is made open [Activities/09-Ins_Render_From_Mongo/Solved](Activities/07-Ins_Render_From_Mongo/Solved), run `python app.py` and then navigate to `http://localhost:5000/` to display the rendered data from the database.

* Open [Activities/07-Ins_Render_From_Mongo/Solved/app.py](Activities/07-Ins_Render_From_Mongo/Solved/app.py) in an editor and go through the code.

  * Pymongo is imported and a Flask app is created.

  * A connection is set up to the Mongo client.

  * Connect to a database called `team_db` if the database is not already available one will be created.

  * Here, the collection is dropped to avoid the data inserting and duplicating every time the server is reset.

  * The collection will be remade each time and the documents are inserted into the collection.

```python
# Import our pymongo library, which lets us connect our Flask app to our Mongo database.
import pymongo

# Create an instance of our Flask app.
app = Flask(__name__)

# Create connection variable
conn = 'mongodb://localhost:27017'

# Pass connection to the pymongo instance.
client = pymongo.MongoClient(conn)

# Connect to a database. Will create one if not already available.
db = client.team_db

# Drops collection if available to remove duplicates
db.team.drop()

# Creates a collection in the database and inserts two documents
db.team.insert_many(
    [
        {
            'player': 'Jessica',
            'position': 'Point Guard'
        },
        {
            'player': 'Mark',
            'position': 'Center'
        }
    ]
)
```

* Students may get distracted by the details of creating our client, db and collection, so be sure to check for understanding on these points in particular.

* Next, let's break down our view. Retrieve the documents from the Mongo database.

```python
# Set route
@app.route('/')
def index():
    # Store the entire team collection in a list
    teams = list(db.team.find())
    print(teams)

    # Return the template with the teams list passed in
    return render_template('index.html', teams=teams)
```

* Finally, comment out the inserted data, re-run the `python app.py` and navigate back to `http://localhost:5000/` to show that instead of the data available on the Flask app it is retrieved from the Mongo database.

</details>

<details>
  <summary><strong>✏️ 4.2 Students Do: Rendering Data From Mongodb (0:25)</strong></summary>

* ⏰ **3-Hour Adjustment**: Reduce activity time to 20 minutes.

* Open the [slideshow](https://docs.google.com/presentation/d/1BWKWJoy_Cx2WXCZnBjZKTneoZr2l90MD5DQ8-B5m7NQ/edit?usp=sharing) and use slides 23 and 24 to present this activity to the class.

* Preview the solution in  [10-Stu_Render_From_Mongo/Solved](Activities/08-Stu_Render_From_Mongo/Solved) to the students. Make sure to remind students that they need to have `mongod` running in a terminal.

* **Files**

* [10-Stu_Render_From_Mongo/app.py](Activities/08-Stu_Render_From_Mongo/Unsolved/app.py)

* [10-Stu_Render_From_Mongo/template/index.html](Activities/08-Stu_Render_From_Mongo/Unsolved/templates/index.html)

* **Instructions**

  * Create a file called `insert_data.py` and setup a connection to mongo using pymongo.

  * Next, insert at least five store items that each include, type, cost, and stock into a mongo databases and collection.

  * Run the file (Why would we not want this in the app.py file?).

  * Setup a Flask app that makes a connection to the database and collection you created.

  * Return to a list of all the full inventory.

  * Display the type of item and cost of the item on the webpage.

* **Bonus**

  * Display cost for each item by (cost \* stock).

* **Hints**

  * Use [bootstrap cards](https://getbootstrap.com/docs/4.0/components/card/) to clean up the look.

</details>

<details>
  <summary><strong>⭐ 4.3 Review: Rendering Data From Mongodb (0:10)</strong></summary>

* Open the [slideshow](https://docs.google.com/presentation/d/1BWKWJoy_Cx2WXCZnBjZKTneoZr2l90MD5DQ8-B5m7NQ/edit?usp=sharing) and leave slide 25 open while reviewing the activity with the class.

* Open [08-Stu_Render_From_Mongo/Solved](Activities/08-Stu_Render_From_Mongo/Solved) and first navigate to the `insert_data.py` file in an editor. Go through the code explaining:

  * This file will insert the data once to avoid duplication. If the code remained on the Flask app, the data would be inserted every time the server was re-run.

  * The connection to a mongo db and collection is made and data inserted.

* Next navigate to `app.py` and go through the code, explaining:

  * A connection is made to mongo db and collection.

  * When the "/" is hit on the browser a query is performed on the collection to return and list all the results.

  * Finally the list from the db is passed to be used by the `index.html` on the front end.

* Lastly, navigate to `index.html` and explain:

  * A for loop is set up to go through the list served from the backend.

  * Dot notation is used access the index of the dictionary.

  * For the bonus, math can be performed inside the curly braces.

</details>

<sub>[Having issues with this activity? Report a bug!](https://bit.ly/2UQFHZL)</sub>

- - -

## 5. Scrape and Render

| Activity Time:       1:05 |  Elapsed Time:      4:00  |
|---------------------------|---------------------------|

<details>
  <summary><strong>📣 5.1 Instructor Do: Scrape, Save and Render Data (0:20)</strong></summary>

* Open the [slideshow](https://docs.google.com/presentation/d/1BWKWJoy_Cx2WXCZnBjZKTneoZr2l90MD5DQ8-B5m7NQ/edit?usp=sharing) and use slides 26 and 27 to present this unit to the class.

* This is the culminating activity where they will scrape a url, insert the data into Mongo, query it on the server, and render the query results on the page.

* This activity is similar to the previous one, with the additional requirement of web scraping.

* Change into [Activities/09-Ins_Scrape_And_Render](Activities/09-Ins_Scrape_And_Render/Solved), and run `python app.py`

* Open up `http://localhost:5000/` and click the Find Awesome Deals button.

* This button calls our `scrape_phone.py` file, which does just that: scrapes a phone listing from an online shopping site and saves the results to a Mongo database.

* After you scrape, your path will say `/scrape`. Click back to go back to the index route to see the data that was scraped.

* Open [09-Ins_Scrape_And_Render/app.py](Activities/09-Ins_Scrape_And_Render/Solved/app.py) and go through the code explaining:

  * There is a new library being used called `flask_pymongo`. Documentation can be found at <https://flask-pymongo.readthedocs.io/en/latest/>. As defined by the docs _Flask-PyMongo bridges Flask and PyMongo, so that you can use Flask’s normal mechanisms to configure and connect to MongoDB._

  * There are similarities here to previous examples, but a few key differences that you should review.

  * Before continuing, be sure to instruct students to install this new library. To do so, run the `pip install flask_pymongo` command in their terminal.

```python
from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo

app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/phone_app"
mongo = PyMongo(app)

# Or set inline
# mongo = PyMongo(app, uri="mongodb://localhost:27017/phone_app")

@app.route('/')
def index():
    # find one document from our mongo db and return it.
    listings = mongo.db.listings.find_one()
    # pass that listing to render_template
    return render_template("index.html", listings=listings)

# set our path to /scrape
@app.route("/scrape")
def scraper():
    # create a listings database
    listings = mongo.db.listings
    # call the scrape function in our scrape_phone file. This will scrape and save to mongo.
    listings_data = scrape_phone.scrape()
    # update our listings with the data that is being scraped.
    listings.update(
        {},
        listings_data,
        upsert=True
    )
    # return a message to our page so we know it was successful.
    return redirect("/", code=302)
```

* Next, open [09-Ins_Scrape_And_Render/scrape_phone.py](Activities/09-Ins_Scrape_And_Render/Solved/scrape_phone.py) and go through the code explaining:

  * Import dependencies that allow for web scraping.

  * The Scraped function retrieves the HTML page, then parses with Beautiful Soup.

  * The scrape function the will retrieve a headline, price and number of reviews from the Beautiful Soup object.

  * Finally, this object will be stored in a dictionary.

```python
# Automates browser actions
from splinter import Browser

# Parses the html
from bs4 import BeautifulSoup
import pandas as pd

# For scraping with Chrome
from webdriver_manager.chrome import ChromeDriverManager


def scrape():
    # Setup splinter
    executable_path = {'executable_path': ChromeDriverManager().install()}
    browser = Browser('chrome', **executable_path, headless=False)

    # Set an empty dict for listings that we can save to Mongo
    listings = {}
    # The url we want to scrape
    url = "https://webscraper.io/test-sites/e-commerce/allinone/phones/touch"
    # Call visit on our browser and pass in the url we want to scrape
    browser.visit(url)
    # Let it sleep for 1 second
    time.sleep(1)
    # Return all of the html on our page
    html = browser.html
    # Create a BeautifulSoup object, pass in our HTML, and call 'html.parser'
    soup = BeautifulSoup(html, "html.parser")

    # Build our dictionary for headline, price and neighborhood from our scraped data.
    listings["headline"] = soup.find("a", class_="title").get_text()
    listings["price"] = soup.find("h4", class_="price").get_text()
    listings["reviews"] = soup.find("p", class_="pull-right").get_text()

    # Quit the browser
    browser.quit()

    # Return our dictionary
    return listings
```

* Take a moment to emphasize how we add keys to dictionaries, as we do with `listings` towards the end of `scrape`.

</details>

<details>
  <summary><strong>✏️ 5.2 Students Do: Scrape and Render (0:35)</strong></summary>

* ⏰ **3-Hour Adjustment**: Skip this **Students Do** activity and continue on to the review activity.

* Open the [slideshow](https://docs.google.com/presentation/d/1BWKWJoy_Cx2WXCZnBjZKTneoZr2l90MD5DQ8-B5m7NQ/edit?usp=sharing) and use slides 28 and 29 to present this activity to the class.

* Demo the activity by running [10-Stu_Scrape_Weather/app.py](Activities/10-Stu_Scrape_Weather/Solved/app.py) in terminal and navigating to localhost in a browser. Explain to students that every time the button is clicked the weather in Costa Rica will be scraped, stored in a database and returned to the webpage.

* **Files:**

  * [10-Stu_Scrape_Weather/templates/index.html](Activities/10-Stu_Scrape_Weather/Unsolved/templates/index.html)

  * [10-Stu_Scrape_Weather/app.py](Activities/10-Stu_Scrape_Weather/Unsolved/app.py)

  * [10-Stu_Scrape_Weather/scrape_costa.py](Activities/10-Stu_Scrape_Weather/Unsolved/scrape_costa.py)

* **Instructions**

* [10-Stu_Scrape_Weather/README.md](Activities/10-Stu_Scrape_Weather/README.md)

</details>

<details>
  <summary><strong>⭐ 5.3 Review: Scrape and Render (0:10)</strong></summary>

* ⏰ **3-Hour Adjustment**: This review activity is now an **Everyone Do**.

* Open the [slideshow](https://docs.google.com/presentation/d/1BWKWJoy_Cx2WXCZnBjZKTneoZr2l90MD5DQ8-B5m7NQ/edit?usp=sharing) and leave slide 30 open while reviewing the activity with the class.

  * Spend only 20 minutes on this activity.

  * Use the review section as guidance for talking points as you live-code along with the students.

  * Be sure to take your time and answer all student questions along the way.

* Start by reviewing [Activities/10-Stu_Scrape_Weather/scrape_costa.py](Activities/10-Stu_Scrape_Weather/Solved/scrape_costa.py) first. Go through the code explaining:

  * The `scrape_costa` function contains all of the code to scrape the website and return a Python dictionary of the data.

  * The sleep timer is used to wait for the page to load.

    ```python
    time.sleep(1)
    ```

  * The average temperatures are located in a div tag with the id of `weather`.

    ```python
    avg_temps = soup.find('div', id='weather')
    ```

  * The min and max temps can be found by searching for the strong tags within the weather div.

    ```python
    # Get the min avg temp
    min_temp = avg_temps.find_all('strong')[0].text

    # Get the max avg temp
    max_temp = avg_temps.find_all('strong')[1].text
    ```

  * For the bonus, the image src is a relative path that needs to be joined with the base url.

    ```python
    # BONUS: Find the src for the sloth image
    relative_image_path = soup.find_all('img')[2]["src"]
    sloth_img = url + relative_image_path
    ```

  * A dictionary is used to store the values found during scraping.

    ```python
    # Store data in a dictionary
    costa_data = {
        "sloth_img": sloth_img,
        "min_temp": min_temp,
        "max_temp": max_temp
    }
    ```

  * The browser can be closed after all of the data has been scraped.

  * Finally, the data is returned as a Python dictionary.

    ```python
    # Return results
    return costa_data
    ```

* Next, open [10-Stu_Scrape_Weather/app.py](Activities/10-Stu_Scrape_Weather/Solved/app.py) and explain the following:

  * A database connection is made using PyMongo.
    ```python
    # Use PyMongo to establish Mongo connection
    mongo = PyMongo(app, uri="mongodb://localhost:27017/weather_app")
    ```

  * The first route will default to the `index.html` page.

  * The data for the homepage is retrieved from the mongo database collection.

  * The Flask `render_template` function is used to insert the temperature data into the homepage.

    ```python
    # Route to render index.html template using data from Mongo
    @app.route("/")
    def home():

        # Find one record of data from the mongo database
        destination_data = mongo.db.collection.find_one()

        # Return template and data
        return render_template("index.html", vacation=destination_data)
    ```

  * The `/scrape` route is used to scrape the external webpage and store the data in mongo.

    ```python
    # Route that will trigger the scrape function
    @app.route("/scrape")
    def scrape():

        # Run the scrape function
        costa_data = scrape_costa.scrape_info()

        # Update the Mongo database using update and upsert=True
        mongo.db.collection.update({}, costa_data, upsert=True)

        # Redirect back to home page
        return redirect("/")
    ```

* Lastly, open  [10-Stu_Scrape_Weather/index.html](Activities/10-Stu_Scrape_Weather/Solved/templates/index.html) to show how the data is inserted into the HTML using the templating system.

  ```html
  <img src="{{ vacation.sloth_img }}" alt="Sloth">
  <h2>The typical weather in Costa Rica is:</h2>
  <h3>Max Temp: {{ vacation.max_temp }}</h3>
  <h3>Min Temp: {{ vacation.min_temp }}</h3>
  ```

* Encourage students to rework this problem as it will help them with the homework assignment.

* Take a moment to answer any remaining questions before slacking out the solution and dismissing class.

</details>

<sub>[Having issues with this activity? Report a bug!](https://bit.ly/3bQ2PNo)</sub>

- - -

### Additional Resources

<details>
  <summary><strong>Helpful Links</strong></summary>

* [Flask Render Docs](http://flask.pocoo.org/docs/0.12/quickstart/#rendering-templates)
* [Manage Mongod Processes](https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/)
* [mongo vs mongod](https://stackoverflow.com/questions/4883045/mongodb-difference-between-running-mongo-and-mongod-databases)
* [pymongo docs](https://api.mongodb.com/python/current/)
* [splinter docs](https://splinter.readthedocs.io/en/latest/)

</details>

<details>
  <summary><strong>Helpful Terminal Commands</strong></summary>

* Find instances of Mongo `ps aux | grep mongod`
* Kill process `kill -9 [pid]`
* Drop Mongo Database `use <db name here>` then `db.runCommand( { dropDatabase: 1 } )`

</details>

- - -

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
