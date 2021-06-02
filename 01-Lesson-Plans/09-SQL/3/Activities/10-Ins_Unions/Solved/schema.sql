DROP TABLE IF EXISTS toys;
DROP TABLE IF EXISTS games;

CREATE TABLE toys (
    toy_id SERIAL,
    type VARCHAR,
    name VARCHAR
);

CREATE TABLE games (
    game_id SERIAL,
    type VARCHAR,
    name VARCHAR
);

INSERT INTO toys (type, name)
VALUES
('sports', 'baseball'),
('adventure', 'staff'),
('sports', 'tennis ball'),
('fun', 'doll');

INSERT INTO games (type, name)
VALUES
('sports', 'tag'),
('adventure', 'Kings Quest'),
('sports', 'tennis'),
('fun', 'Make believe');