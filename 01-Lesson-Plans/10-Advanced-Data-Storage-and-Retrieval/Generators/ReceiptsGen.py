import csv
import json
import random
from mimesis import Food, Personal

# Filenames
food_menu_filename = "food_menu.csv"
drinks_menu_filename = "drinks_menu.csv"
receipts_filename = "receipts.json"

# CONSTANTS
food_menu_size = 100
drink_menu_size = 250
total_receipts = 50
seed = 42
random.seed(seed)

food = Food(locale='en', seed=seed)
person = Personal(locale='en', seed=seed)

# Generate a list of food items for a menu
food_menu = [
    {
        "id": i,
        "dish": food.dish(),
        "price": random.randint(10, 30)
    } for i in range(food_menu_size)]

# Generate a list of drinks for a menu
drinks_menu = [
    {
        "id": i,
        "drink": food.drink(),
        "price": random.randint(4, 12)
    } for i in range(drink_menu_size)]

# Generate a list of receipts with customer name, credit card number
# food and drinks are lists of foreign keys
receipts = [
    {
        "id": i,
        "name": person.full_name(),
        "credit_card": person.credit_card_number(),
        "food": random.sample(range(food_menu_size), random.randint(1, 8)),
        "drinks": random.sample(range(drink_menu_size), random.randint(1, 10))
    } for i in range(total_receipts)
]

with open(food_menu_filename, "w") as csvfile:
    fieldnames = ["id", "dish", "price"]
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(food_menu)

with open(drinks_menu_filename, "w") as csvfile:
    fieldnames = ["id", "drink", "price"]
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(drinks_menu)

with open(receipts_filename, 'w') as outfile:
    json.dump(receipts, outfile)
