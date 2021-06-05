-- Drop table if exists
DROP TABLE programming_languages;

-- Create new programming_languages table
CREATE TABLE programming_languages (
  id SERIAL PRIMARY KEY,
  language VARCHAR(20),
  rating INT
);

-- Insert new data
INSERT INTO programming_languages (language, rating)
VALUES ('HTML', 95),
	('JS', 99),
	('JQuery', 98),
	('MySQL', 70),
	('MySQL', 70);

SELECT * FROM programming_languages;

-- Query the rows with the language "MySQL"
SELECT *
FROM programming_languages
WHERE language = 'MySQL';

-- Drop a duplicate row
DELETE FROM programming_languages
WHERE id = 5;

SELECT *
FROM programming_languages;

-- Add additional data
INSERT INTO programming_languages (language, rating)
VALUES ('Python', 98),
	('C++', 73),
	('R', 95);

SELECT *
FROM programming_languages;

-- Update "JS" to "JavaScript"
UPDATE programming_languages
SET language = 'JavaScript'
WHERE id = 2;

SELECT *
FROM programming_languages;

-- Change HTML's rating to 90
UPDATE programming_languages
SET rating = 90
WHERE id = 1;

SELECT *
FROM programming_languages;

-- BONUS
-- Add a "mastered" column with the boolean default of true
ALTER TABLE programming_languages
ADD COLUMN mastered BOOLEAN default true;
