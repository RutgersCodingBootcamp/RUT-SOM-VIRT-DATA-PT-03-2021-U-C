import csv
import random
from mimesis import Address, Personal

# Constants
output_filename = "demographics.csv"
number_of_people = 1000
number_of_states = 5
seed = 42
random.seed(seed)

person = Personal(locale='en', seed=seed)
address = Address(locale='en', seed=seed)
states = [address.state() for _ in range(number_of_states)]

demographics = [
    {
        "id": i,
        "name": person.full_name(),
        "age": random.randint(18, 67),
        "gender": person.gender(),
        "height_meter": person.height(),
        "weight_kg": person.weight(),
        "children": person.child_count(),
        "occupation": person.occupation(),
        "academic_degree": person.academic_degree(),
        "salary": random.randint(65, 90),
        "location": random.choice(states)
    } for i in range(number_of_people)
]

with open(output_filename, "w") as csvfile:
    fieldnames = [
        "id", "name", "age", "gender",
        "height_meter", "weight_kg", "children", "occupation",
        "academic_degree", "salary", "location"]
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(demographics)
