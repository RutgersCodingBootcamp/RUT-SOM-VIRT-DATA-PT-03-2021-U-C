-- Create tables for raw data to be loaded into
CREATE TABLE customer_name (
customer_id INT PRIMARY KEY,
first_name VARCHAR,
last_name VARCHAR
);

CREATE TABLE customer_location (
customer_id INT,
location_id INT PRIMARY KEY,
address VARCHAR,
us_state VARCHAR,
FOREIGN KEY(customer_id) REFERENCES customer_name(customer_id)
);

CREATE TABLE customer_email (
email_id INT PRIMARY KEY,
customer_id INT,
email VARCHAR,
FOREIGN KEY(customer_id) REFERENCES customer_name(customer_id)
);

-- Joins tables
SELECT customer_name.customer_id, customer_name.first_name, customer_name.last_name, customer_location.address, customer_location.us_state
FROM customer_name
JOIN customer_location
ON customer_name.customer_id = customer_location.customer_id;
