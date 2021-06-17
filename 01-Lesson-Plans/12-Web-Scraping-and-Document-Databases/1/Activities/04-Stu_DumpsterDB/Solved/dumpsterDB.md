# Dumpster Database

* Create and use a database called "Dumpster_DB".


```
use Dumpster_DB
```

* Create the "divers" collection and then insert a couple documents into it


```
db.divers.insert({"name":"Davey", "yearsDiving":10, "stillDiving": true, "bestFinds":["Flat Screen", "Ruby Collar", "$100"]})

db.divers.insert({"name":"Jeanie", "yearsDiving":1, "stillDiving": true, "bestFinds":["Movie Theater Chairs", "Music Box"]})

db.divers.insert({"name":"Boppo", "yearsDiving":5, "stillDiving": true, "bestFinds":["Half-Eaten Hamburger", "Some Goop"]})
```

* Update 'yearsDiving' so that it is one year higher for each diver


```
db.divers.update({"name":"Davey"},{$set:{"yearsDiving":11}})
db.divers.update({"name":"Jeanie"},{$set:{"yearsDiving":2}})
db.divers.update({"name":"Boppo"},{$set:{"yearsDiving":6}})
```

* Update 'stillDiving' to False for Davey


```
db.divers.update({"name":"Davey"},{$set:{"stillDiving": false}})
```

* Add a new value to Jeanie's "bestFinds"


```
db.divers.update({"name":"Jeanie"},{$push:{"bestFinds":"Mona Lisa"}})
```

* Remove Boppo from the collection


```
db.divers.remove({"name":"Boppo"})
```
