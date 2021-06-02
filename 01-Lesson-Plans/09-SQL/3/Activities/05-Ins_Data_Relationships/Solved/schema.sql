-- One to one
-- Simpson table
CREATE TABLE simpsons(
  id SERIAL,
  name VARCHAR,
  "Social Security" INTEGER
);

INSERT INTO simpsons (name, "Social Security")
VALUES
  ('Homer', 111111111),
  ('Marge', 222222222),
  ('Lisa', 333333333),
  ('Bart', 444444444),
  ('Maggie', 555555555);

-- One to Many
-- Address Table
CREATE TABLE address (
  id INTEGER PRIMARY KEY,
  address VARCHAR
);

-- Insertion query for address table
INSERT INTO address (id, address)
VALUES
  (11, '742 Evergreen Terrace'),
  (12, '221b Baker Streer');

-- People Table
CREATE TABLE people (
  id INTEGER PRIMARY KEY,
  name VARCHAR,
  social_security INTEGER,
  address_id INTEGER
);

-- Insertion query for people table
INSERT INTO people (id, name, social_security)
VALUES
  (1, 'Homer', 111111111),
  (2, 'Marge', 222222222),
  (3, 'Lisa', 333333333),
  (4, 'Bart', 444444444),
  (5, 'Maggie', 555555555),
  (6, 'Sherlock', 666666666),
  (7, 'Watson', 777777777);

-- Many to Many
-- Table schema for the Simpsons children
CREATE TABLE children(
  child_id SERIAL,
  child_name VARCHAR(255) NOT NULL,
  PRIMARY KEY (child_id)
);

-- Insertion queries for the Simpsons children
INSERT INTO children (child_name)
VALUES
  ('Bart'),
  ('Lisa'),
  ('Maggie');

-- Table schema for the Simpsons parents
CREATE TABLE parents(
  parent_id INTEGER NOT NULL,
  parent_name VARCHAR(255) NOT NULL,
  PRIMARY KEY (parent_id)
);

-- Insertion queries for the Simpsons parents
INSERT INTO parents (parent_id, parent_name)
VALUES
  (11, 'Homer'),
  (12, 'Marge');

-- Table schema for the junction table
CREATE TABLE child_parent (
  child_id INTEGER NOT NULL,
  FOREIGN KEY (child_id) REFERENCES children(child_id),
  parent_id INTEGER NOT NULL,
  FOREIGN KEY (parent_id) REFERENCES parents(parent_id),
  PRIMARY KEY (child_id, parent_id)
);

-- Insertion queries for the junction table
INSERT INTO child_parent (child_id, parent_id)
VALUES
  (1, 11),
  (1, 12),
  (2, 11),
  (2, 12),
  (3, 11),
  (3, 12);
