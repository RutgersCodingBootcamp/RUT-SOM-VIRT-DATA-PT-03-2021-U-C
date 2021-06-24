CREATE TABLE customer_name (
	customer_id INT PRIMARY KEY,
	first_name VARCHAR,
	last_name VARCHAR
);

CREATE TABLE customer_location (
	location_id INT PRIMARY KEY,
	customer_id INT,
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
