-- Query to check successful load
SELECT * FROM premise;

SELECT * FROM county;

-- Join tables on county_id
SELECT premise.id, premise.premise_name, county.county_name
FROM premise
INNER JOIN county
ON premise.county_id = county.county_id;
