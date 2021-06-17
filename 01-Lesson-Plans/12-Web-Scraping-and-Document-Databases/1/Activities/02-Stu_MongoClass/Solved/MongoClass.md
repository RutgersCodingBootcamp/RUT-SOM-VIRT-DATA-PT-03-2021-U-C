# Mongo Class

## A. Use the command line to create a classDB database.

* Insert entries for yourself and the people in your row in a classroom collection. Each document should have:

1. A field of name with the person's name.
2. A field of the person's favorite Python library, e.g. pandas.
3. A field of a list of the person's hobbies .

## Example:

```
use classDB

db.classroom.insert({name: 'Mariah', age: 23, favorite_python_library: 'Seaborn', hobbies: ['Coding', 'Reading', 'Running']})

db.classroom.insert({name: 'Ricky', age: 34, favorite_python_library: 'Matplotlib', hobbies: ['Not Coding', 'Not Reading', 'Not Running', 'Guitar']})

db.classroom.insert({name: 'Srikanth', age: 28, favorite_python_library: 'Pandas', hobbies: ['Netflix', 'Guitar', 'Traveling']})
```

## B. Use find commands to get:

1. A list of everyone of a certain age.


```
db.classroom.find({age: 23}).pretty()
```

2. An entry for a single person.


```
db.classroom.find({name: 'Ricky'}).pretty()
```
