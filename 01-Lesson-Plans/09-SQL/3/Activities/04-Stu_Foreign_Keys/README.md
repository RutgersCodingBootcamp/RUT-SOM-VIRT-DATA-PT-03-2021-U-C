## Foreign Keys 

In this activity, you will create and populate two new tables with foreign keys that reference existing data.

### Instructions

**Note:** Make sure all tables have primary keys that increment with each new row of data.

* Create a `customer` table with a customer first name and customer last name.

* Create a `customer_email` table with a foreign key that references a field in the original `customer` table.

* Populate the `customer_email` table with emails.

* Create a `customer_phone` table with a foreign key that references a field in the original `customer` table.

* Populate the `customer_phone` table with phone numbers.

* Test foreign keys by writing a query to insert data in the `customer_phone` table that does not have a reference ID in the `customer` table.

* Join all three tables.

**Hint:** Think about how you can select certain columns in a table. Use those columns as a reference to insert data into a table.
