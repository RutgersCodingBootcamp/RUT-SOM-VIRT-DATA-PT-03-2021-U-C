-- Delete the table "people"
DROP TABLE people;

-- Re-create the table "people" within animals_db
CREATE TABLE people (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  has_pet BOOLEAN DEFAULT false,
  pet_type VARCHAR(10) NOT NULL,
  pet_name VARCHAR(30),
  pet_age INT
);

-- Insert data into the table
INSERT INTO people (name, has_pet, pet_type, pet_name, pet_age)
VALUES ('Jacob', true, 'dog', 'Misty', 10),
  ('Ahmed', true, 'rock', 'Rockington', 100),
  ('Ahmed', true, 'rock', 'Rockington', 100),
  ('Peter', true, 'cat', 'Franklin', 2),
  ('Dave', true, 'dog', 'Queso', 1),
  ('Dave', true, 'dog', 'Pringles', 7);

-- Query all fields from the table
SELECT *
FROM people;

-- Query the data to return all the rows containing the name "Dave"
SELECT id, name, pet_name, pet_age
FROM people
WHERE name = 'Dave';

-- Update a single row to change the `pet_name` and `pet_age` column data
UPDATE people
SET has_pet = true, pet_name = 'Rocket', pet_age = 8
WHERE id = 6;

SELECT *
FROM people;

-- Delete the duplicate entry using a unique id
DELETE FROM people
WHERE id = 3;

SELECT *
FROM people;
