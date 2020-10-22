-- Users table seeds here (Example)
INSERT INTO users (password, mobile_phone, email, first_name, last_name, is_customer)
VALUES ('userpassword',14037019333, 'jimmy@outlook.com', 'Jimmy','Hungry', true);
INSERT INTO users (password, mobile_phone, email, first_name, last_name, is_customer)
VALUES ('ownerpassword',14038675309, 'joe@tacotakeout.ca', 'Joe','Gonzales', false);
INSERT INTO users (password, mobile_phone, email, first_name, last_name, is_customer)
VALUES ('ownerpassword',14038675309, 'sally@tacotakeout.ca', 'sally','Gonzales', false);

INSERT INTO menu_categories (name) VALUES ('appetizers');
INSERT INTO menu_categories (name) VALUES ('beverages');
INSERT INTO menu_categories (name) VALUES ('entres');
INSERT INTO menu_categories (name) VALUES ('desserts');

INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
VALUES (1,'Nachos', 'Tasty Nachos', 'appetizer1.jpg', 999);
INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
VALUES (1,'Cheese Sticks', 'Tasty Cheese Sticks', 'appetizer1.jpg', 799);
INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
VALUES (1,'Tossed Salad', 'Fresh Tossed Salad', 'appetizer1.jpg', 550);
INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
VALUES (1,'Chips n Guac', 'Fresh Guacamole', 'appetizer1.jpg', 350);

INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
VALUES (2,'Fountain drinks', 'Refreshing Fountain Drink', 'beverage.jpg', 199);
INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
VALUES (2,'Flavored tea', 'Refreshing flavored tea', 'beverage.jpg', 275);
-- INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
-- VALUES (2,'Coffee', 'Fresh brewed coffee', 'beverage.jpg', 199);

INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
VALUES (3,'Super Taco', 'Delicious super Taco', 'taco1.png', 899);
INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
VALUES (3,'Enchiladas', 'Delicious enchiladas', 'taco1.png', 1099);
-- INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
-- VALUES (3,'Rancheros', 'Delicious rancheros', 'taco1.png', 1599);

INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
VALUES (4,'Fried Ice Cream', 'Tasty fried ice cream', 'icecream1.jpg', 899);
INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
VALUES (4,'Churros', 'Delicious churros', 'icecream1.jpg', 575);
INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
VALUES (4,'Tortilla Crisp', 'Delicious tortilla crisp', 'icecream1.jpg', 1599);
INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
VALUES (4,'Cheesecake', 'Delicious cheesecake', 'icecream1.jpg', 1299);

-- INSERT INTO orders (user_id)
-- VALUES (1), (3), (2);

-- INSERT INTO order_menu_items (order_id, menu_item_id, quantity)
-- VALUES (1, 1, 4),
-- (1, 2, 2),
-- (1, 5, 3),
-- (2, 7, 5),
-- (2, 8, 1),
-- (3, 9, 1),
-- (3, 6, 2),
-- (3, 7 ,1),
-- (3, 8 ,1);
