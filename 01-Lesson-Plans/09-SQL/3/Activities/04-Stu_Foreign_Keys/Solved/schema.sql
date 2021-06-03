-- 1. Create a Customer table
CREATE TABLE customer (
    id SERIAL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

-- Populate that table
INSERT INTO customer (first_name, last_name)
VALUES
  ('Bob', 'Smith'),
  ('Jane', 'Davidson'),
  ('Jimmy', 'Bell'),
  ('Stephanie', 'Duke');

-- View our table
SELECT * FROM customer;

-- 2. Create Customer Email table
CREATE TABLE customer_email (
    id SERIAL,
    email VARCHAR(30) NOT NULL,
    customer_id INTEGER NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES customer(id)
);

-- Populate that table
INSERT INTO customer_email (customer_id, email)
VALUES
  (1, 'bobsmith@email.com'),
  (2, 'jdavids@email.com'),
  (3, 'jimmyb@email.com'),
  (4, 'sd@email.com');

-- View our second table
SELECT * FROM customer_email;

-- Let's create a third table with a foreign key that references the first table
CREATE TABLE customer_phone (
    id SERIAL,
    phone VARCHAR(30) NOT NULL,
    customer_id INTEGER NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES customer(id)
);

-- Populate that table
INSERT INTO customer_phone (customer_id, phone)
VALUES
  (1, '435-344-2245'),
  (2, '332-776-4678'),
  (3, '221-634-7753'),
  (4, '445-663-5799');

-- View our third table
SELECT * FROM customer_phone;


-- Uncomment the following to demonstrate the error of inserting a value with no foreign key
-- INSERT INTO customer_phone(customer_id, phone)
-- VALUES
  -- (10, '555-444-3333');

-- Join Tables
SELECT customer.first_name, customer.last_name, email.email, phone.phone
FROM customer
JOIN customer_email AS email
  ON customer.id = email.customer_id
JOIN customer_phone AS phone
  ON customer.id = phone.customer_id;
