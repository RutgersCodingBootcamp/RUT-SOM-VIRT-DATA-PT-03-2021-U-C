-- Select the average length of movies by rental rate
SELECT rental_rate, AVG(length) AS "avg length"
FROM film
GROUP BY rental_rate
ORDER BY "avg length";

-- Round the results to use only two decimal places
SELECT rental_rate, ROUND(AVG(length),2) AS "avg length"
FROM film
GROUP BY rental_rate
ORDER BY "avg length";

-- Order by descending values
SELECT rental_rate, ROUND(AVG(length),2) AS "avg length"
FROM film
GROUP BY rental_rate
ORDER BY "avg length" DESC;

-- Limit results to 5
SELECT rental_rate, ROUND(AVG(length),2) AS "avg length"
FROM film
GROUP BY rental_rate
ORDER BY "avg length" DESC
LIMIT 5;
