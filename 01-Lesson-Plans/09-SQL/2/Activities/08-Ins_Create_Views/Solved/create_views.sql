SELECT s.store_id, SUM(amount) AS Gross
FROM payment AS p
  JOIN rental AS r
  ON (p.rental_id = r.rental_id)
    JOIN inventory AS i
    ON (i.inventory_id = r.inventory_id)
      JOIN store AS s
      ON (s.store_id = i.store_id)
      GROUP BY s.store_id;


-- Create view from query
CREATE VIEW total_sales AS
SELECT s.store_id, SUM(amount) AS Gross
FROM payment AS p
JOIN rental AS r
ON (p.rental_id = r.rental_id)
  JOIN inventory AS i
  ON (i.inventory_id = r.inventory_id)
    JOIN store AS s
    ON (s.store_id = i.store_id)
    GROUP BY s.store_id;


-- Query the table view created
SELECT *
FROM total_sales;

-- Drop view
DROP VIEW total_sales;
