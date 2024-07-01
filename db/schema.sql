CREATE TABLE users (
  id serial PRIMARY KEY,
  username varchar(50) UNIQUE NOT NULL,
  email varchar(100) UNIQUE NOT NULL,
  bio text,
  password varchar(255), -- Adjusted length for hashed passwords
  role varchar(100)
);

CREATE TABLE bags (
  id serial PRIMARY KEY,
  user_id int REFERENCES users(id),
  bag_name varchar(50),
  description text
);

CREATE TABLE treasures (
  id serial PRIMARY KEY,
  bag_id int REFERENCES bags(id),
  user_id int REFERENCES users(id),
  treasure_name varchar(50),
  description text
);

