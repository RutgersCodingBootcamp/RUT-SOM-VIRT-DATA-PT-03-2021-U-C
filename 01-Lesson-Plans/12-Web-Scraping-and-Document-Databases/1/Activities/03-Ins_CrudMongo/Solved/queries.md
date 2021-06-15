# Update, Delete and Drop in MongoDB

* Use the travel_db

```shell
db
use travel_db
```

* Insert two countries in Africa

```shell
db.destinations.insert({'country': 'Egypt', 'continent': 'Africa', major_cities: ['Cairo', 'Luxor']})
db.destinations.insert({'country': 'Nigeria', 'continent': 'Africa', major_cities: ['Lagos', 'Kano']})
```

* Show how to update data using `db.[COLLECTION_NAME].update()`

```shell
db.destinations.update({"country": "Egypt"}, {$set: {"continent": "Antarctica"}})
```

* Note that the above will only update the first entry it matches.

* To update multiple entries, you can add `{multi:true}`, all countries listed as being in Africa will now show Antarctica as their continent

```shell
db.destinations.update({"continent": "Africa"}, {$set: {"continent": "Antarctica"}}, {multi: true})
```

* Alternatively, we can use this syntax to update more than one record.

```shell
db.destinations.updateMany({"continent": "Africa"}, {$set: {"continent": "Antarctica"}})
```

* Ask the class what they think will happen when you run this command, even though a capital doesn't exist.

```shell
db.destinations.update({"country": "Morocco"}, {$set: {"capital": "Rabat"}})
```

* Answer: it will add the capital field to the document and show the field can now be updated with the same command.

```shell
db.destinations.update({"country": "Morocco"}, {$set: {"capital": "RABAT"}})
```

* Show how to push to an array with `$push`.

```shell
db.destinations.update({"country": "Morocco"}, {$push: {"major_cities": "Agadir"}})
```

* The upsert option updates a document if one exists; it otherwise creates a new document.

```shell
db.destinations.update({'country': 'Canada'}, {$set: {'capital': 'Ottawa'}}, {upsert: true})
```

* Show how to delete an entry with `db.[COLLECTION_NAME].remove({justOne: true})`.

```shell
db.destinations.remove({"country": "Morocco"}, {justOne: true})
```

* Show how to empty a collection with `db.[COLLECTION_NAME].remove()`.

```shell
db.destinations.remove({})
```

* Show how to drop a collection with `db.[COLLECTION_NAME].drop()`.

```shell
db.destinations.drop()
```

* Show how to drop a database

```shell
db.dropDatabase()
```
