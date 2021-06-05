-- Two queries for for actors and customer
-- Union of customers
SELECT actor_id AS id, first_name
FROM actor
WHERE actor_id between 1 and 5;

SELECT customer_id AS id, first_name
FROM customer
WHERE customer_id between 6 and 10;

-- Union of customers
SELECT actor_id AS id, first_name
FROM actor
WHERE actor_id between 1 and 5

UNION

SELECT customer_id AS id, first_name
FROM customer
WHERE customer_id between 6 and 10;

-- Two separte queries for toys and games
SELECT toy_id AS id, type
FROM toys;

SELECT game_id AS id, type
FROM games;

-- Union of toys and game types
SELECT toy_id AS id, type
FROM toys

UNION

SELECT game_id AS id, type
FROM games;

-- Include duplicate rows
SELECT toy_id AS id, type
FROM toys

UNION ALL

SELECT game_id AS id, type
FROM games;
