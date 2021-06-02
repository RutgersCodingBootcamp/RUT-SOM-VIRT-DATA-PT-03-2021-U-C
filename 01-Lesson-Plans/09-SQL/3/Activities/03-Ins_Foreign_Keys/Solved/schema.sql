CREATE TABLE animals_all (
  id SERIAL PRIMARY KEY,
  animal_species VARCHAR(30) NOT NULL,
  owner_name VARCHAR(30) NOT NULL
);

INSERT INTO animals_all (animal_species, owner_name)
VALUES
  ('Dog', 'Bob'),
  ('Fish', 'Bob'),
  ('Cat', 'Kelly'),
  ('Dolphin', 'Aquaman');

SELECT * FROM animals_all;

CREATE TABLE animals_location (
  id SERIAL PRIMARY KEY,
  location VARCHAR(30) NOT NULL,
  animal_id INTEGER NOT NULL,
  FOREIGN KEY (animal_id) REFERENCES animals_all(id)
);

-- Insert data
INSERT INTO animals_location (location, animal_id)
VALUES
  ('Dog House', 1),
  ('Fish Tank', 2),
  ('Bed', 3),
  ('Ocean', 4);

SELECT * FROM animals_location;

-- Insert error
INSERT INTO animals_location (location, animal_id)
VALUES ('River', 5);

-- Correct insert
INSERT INTO animals_all (animal_species, owner_name)
VALUES
  ('Fish', 'Dave');

INSERT INTO animals_location (location, animal_id)
VALUES
  ('River', 5);

SELECT * FROM animals_location;
