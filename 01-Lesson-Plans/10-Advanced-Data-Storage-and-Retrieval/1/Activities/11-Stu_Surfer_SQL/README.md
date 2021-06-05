### Instructions

* Modify the `Surfer` class created during the previous activity so that it will function with SQLAlchemy.

  * `__tablename__` should be "surfers"
  * `surfer_id` should be an integer and the primary key
  * `name` should be a string capable of holding 255 characters
  * `hometown` should be a string capable of holding 255 characters
  * `rank` should be an integer

* Create a new class called `Board` which will function with SQLAlchemy and has the following parameters...

  * `__tablename__` should be "surfboards"
  * `id` should be an integer and the primary key
  * `surfer_id` should be an integer that references a surfer_id in the "surfers" column
  * `board_name` should be a string capable of holding 255 characters
  * `color` should be a string capable of holding 255 characters
  * `length` should be an integer

* Pull a list of all of the surfers and surfboards already inside the database

* Push a new surfer and surfboard to the tables on the database
