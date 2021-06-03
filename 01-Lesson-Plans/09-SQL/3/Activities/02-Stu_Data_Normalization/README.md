## Pet Normalizer

In this activity, you will be utilizing data normalization practices.

### Instructions

* In pgAdmin, create a new database called `pets_db`.

* Use Excel to get the data into first normal form (1NF).

* Using the normalized CSV, create the following tables with continued normalized practices:

  * a table for owners that takes an ID and the owner's name

  * a table for pet names that takes two IDs, the pet's name, and the pet's type.

* Using the CSV file as guide, insert the data into respective tables.

  **Hint:** Be sure that each table has a unique primary key.


### Bonus

* Create a `service` table that displays the different types of services that are offered.

* Create a `pet_names_updated` table that takes an ID that will connect to the `services` table.

* Join all three tables.
