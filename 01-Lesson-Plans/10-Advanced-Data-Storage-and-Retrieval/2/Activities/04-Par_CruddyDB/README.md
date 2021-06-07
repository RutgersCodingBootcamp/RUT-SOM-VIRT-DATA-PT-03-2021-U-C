* **Instructions**:

  * Within a Python file, create new SQLAlchemy class called `Garbage` that holds the following values...

    * `__tablename__`: Should be "garbage_collection"

    * `id`: The primary key for the table that is an integer and automatically increments

    * `item`: A string that describes what kind of item was collected

    * `weight`: A double that explains how heavy the item is

    * `collector`: A string that lets users know which garbage man collected the item

  * Create a connection and a session before adding a few items into the SQLite database crafted.

  * Update the values within at least two of the rows added to the table.

  * Delete the row with the lowest weight from the table.

  * Print out all of the data within the database.
  
* **Bonus**

  * If you're up for a challenge, try to use a SQLAlchemy function to identify the item with the lowest ID value and change its weight to 120.
