INSERT INTO users (username, email, bio, password, role) VALUES
('user1', 'user1@example.com', 'Bio of user 1', 'password1', 'admin'),
('user2', 'user2@example.com', 'Bio of user 2', 'password2', 'user'),
('user3', 'user3@example.com', 'Bio of user 3', 'password3', 'user'),
('user4', 'user4@example.com', 'Bio of user 4', 'password4', 'admin'),
('user5', 'user5@example.com', 'Bio of user 5', 'password5', 'user');

INSERT INTO bags (user_id, bag_name, description) VALUES
(1, 'Bag of user 1', 'Description for bag of user 1'),
(2, 'Bag of user 2', 'Description for bag of user 2'),
(3, 'Bag of user 3', 'Description for bag of user 3'),
(4, 'Bag of user 4', 'Description for bag of user 4'),
(5, 'Bag of user 5', 'Description for bag of user 5');

INSERT INTO treasures (bag_id, user_id, treasure_name, description) VALUES
(1, 1, 'Gold Coin', 'A shiny gold coin'),
(2, 2, 'Silver Coin', 'A sparkling silver coin'),
(3, 3, 'Emerald', 'A precious green emerald'),
(4, 4, 'Ruby', 'A vibrant red ruby'),
(5, 5, 'Diamond', 'A brilliant diamond');