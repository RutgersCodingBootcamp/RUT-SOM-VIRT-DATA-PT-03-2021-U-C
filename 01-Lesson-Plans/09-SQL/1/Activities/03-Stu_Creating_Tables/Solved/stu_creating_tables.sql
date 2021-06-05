-- Create a new table
CREATE TABLE cities (
  city VARCHAR(30) NOT NULL,
  state VARCHAR(30) NOT NULL,
  population INT
);

-- Insert data into the table
INSERT INTO cities (city, state, population)
VALUES ('Alameda', 'California', 79177),
  ('Mesa', 'Arizona', 496401),
  ('Boerne', 'Texas', 16056),
  ('Anaheim', 'California', 352497),
  ('Tucson', 'Arizona', 535677),
  ('Garland', 'Texas', 238002);

-- View the table data
SELECT *
FROM cities;

-- Use a query to view only the cities
SELECT city
FROM cities;

-- Bonus 1:
-- Create a query to view cities in Arizona
SELECT city, state
FROM cities
WHERE state = 'Arizona';

-- Bonus 2:
-- Create a query to view cities and states
-- with a population less than 100,000
SELECT *
FROM cities
WHERE population < 100000;

-- Bonus 3:
-- Create a query to view the city in California
-- with a population of less than 100,000
SELECT *
FROM cities
WHERE population < 100000
AND state = 'California';
