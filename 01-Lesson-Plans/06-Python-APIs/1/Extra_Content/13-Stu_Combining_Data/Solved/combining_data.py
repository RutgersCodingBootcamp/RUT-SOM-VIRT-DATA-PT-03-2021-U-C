import requests as req
import pandas as pd

# Create a JSON object with three links to NYT articles about it, and whatever
# other information you"d like--such as Director, Year published, etc.
# ==============================================================================

# Initialize "constants"
info = {}
name = "Gladiator"

# Initialize config variables
omdb_url = "http://www.omdbapi.com/?apikey=40e9cece&t="
nyt_url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
api_key = "164b73c522a8420c8e05343ef1da0a7e"

# Make requests
movie = req.get(omdb_url + name).json()
movie_articles = req.get(nyt_url + "api-key=" + api_key + "&q=" + name).json()
movie_articles = [
    article for article in movie_articles["response"]["docs"]][0:3]


# Save some information
info["Year"] = movie["Year"]
info["Director"] = movie["Director"]

# Get URLs from article data
info["Links"] = []
for article in movie_articles:
    url = article["web_url"]
    if url is not None:
        info["Links"] += [url]

print("The director of  " + name + " was " + info["Director"] + ".")
print("It was released in " + str(info["Year"]) + ".")
print("We collected " +
      str(len(info["Links"])) +
      " articles. Their links are:\n")
for url in info["Links"]:
    print(url)
