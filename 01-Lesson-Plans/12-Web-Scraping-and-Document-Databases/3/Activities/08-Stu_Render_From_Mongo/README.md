# Stocking up on Data

## Instructions

* Create a new database, `store_inventory`, and within it a collection, `produce`. 

* Create a file called `insert_data.py` and add the following:

  * Setup a connection to `store_inventory` and the `produce` collection using `pymongo`.
  
  * Insert into `produce` a list of five or more dictionaries that each include `type`, `cost`, and `stock`. For example: 
  ```
  {
      "type": "apples",
      "cost": .23,
      "stock": 333
  }
  ```

* Run `insert_data.py`. (Why would we not want this code in our `app.py` file?).

* Setup a Flask app that makes a connection to the database and collection you created.

* Return a list of the full inventory.

* Display the type of item and cost of the item in index.html.

## Bonus

* Display cost for each item by (cost \* stock).

* Use [bootstrap cards](https://getbootstrap.com/docs/4.0/components/card/) to clean up the look.
