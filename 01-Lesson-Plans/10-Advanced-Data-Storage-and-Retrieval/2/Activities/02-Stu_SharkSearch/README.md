### Instructions 

* Use [sharks.sqlite](Resources/sharks.sqlite) as your data source.

* Within a Python script, create a `Sharks` class that will be able to read all of the columns in from the table you created. Consult the SQL schema of the `sharks` table when creating your class:

```sql
CREATE TABLE sharks (
    id INTEGER PRIMARY KEY,
    case_number TEXT,
    date TEXT,
    year INT,
    type TEXT,
    country TEXT,
    area TEXT,
    location TEXT,
    activity TEXT,
    name TEXT,
    sex TEXT,
    age INT,
    injury TEXT,
    fatal_y_n TEXT,
    time TEXT,
    species TEXT,
    investigator_or_source TEXT,
    pdf TEXT,
    original_order INTEGER
);
```

* Using SQLAlchemy, perform the following queries...

  - Print all locations of shark attacks

  - Find the number of provoked attacks

  - Find the number of attacks in the USA

  - Find the number of attacks in 2017

  - Find the number of attacks while surfing

  - Find the number of fatal attacks

  - Find the number of fatal attacks while surfing

  - Find the number of fatal attacks in Mozambique while spearfishing
