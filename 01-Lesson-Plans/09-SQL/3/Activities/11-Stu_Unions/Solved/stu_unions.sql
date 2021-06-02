
-- Question 1

SELECT COUNT(*)
FROM city
UNION
SELECT COUNT(*)
FROM country;


-- Question 2

SELECT customer_id
FROM customer
WHERE address_id IN
(
  SELECT address_id
  FROM address
  WHERE city_id IN
  (
    SELECT city_id
    FROM city
    WHERE city = 'London'
  )
)
UNION ALL
SELECT id
FROM customer_list
WHERE city = 'London';


