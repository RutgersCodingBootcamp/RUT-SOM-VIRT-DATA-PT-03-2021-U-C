-- First select title and id for movie EARLY HOME
SELECT title, film_id
FROM film
WHERE title = 'EARLY HOME';

-- Using the film_id located in the previous query find it in the inventory table
SELECT *
FROM inventory
WHERE film_id = 268;

-- Use Join to find the inventory, film and store id
SELECT i.inventory_id, i.film_id, i.store_id
FROM inventory i
JOIN film f
ON (i.film_id = f.film_id)
WHERE f.title = 'EARLY HOME';

-- Use Subquery to get the film_id from the query finding EARLY HOME
SELECT *
FROM inventory
WHERE film_id IN
(
  SELECT film_id
  FROM film
  WHERE title = 'EARLY HOME'
);

-- Check to more sure the subquery returned correct value
SELECT *
FROM inventory
WHERE film_id IN (268);
