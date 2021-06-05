-- Create the subquery
SELECT title,
(SELECT COUNT(inventory.film_id)
	FROM inventory
	WHERE film.film_id = inventory.film_id ) AS "Number of Copies"
FROM film;

-- Create View
CREATE VIEW title_count AS
SELECT title,
(SELECT COUNT(inventory.film_id)
	FROM inventory
	WHERE film.film_id = inventory.film_id ) AS "Number of Copies"
FROM film;

-- Query the view to the titles with 7 copies
SELECT title, "Number of Copies"
FROM title_count
WHERE "Number of Copies" = 7;
