-- Users table seeds here (Example)
INSERT INTO users (password, mobile_phone, email, first_name, last_name, is_customer)
VALUES ('userpassword',14037019333, 'eddy@embtech.ca', 'Eddy','Bussiere', true);
INSERT INTO users (password, mobile_phone, email, first_name, last_name, is_customer)
VALUES ('ownerpassword',1408675309, 'joe@tacotakeout.ca', 'Joe','Gonzales', false);
INSERT INTO users (password, mobile_phone, email, first_name, last_name, is_customer)
VALUES ('ownerpassword',1408675309, 'sally@tacotakeout.ca', 'sally','Gonzales', false);

INSERT INTO menu_categories (name) VALUES ('appetizers');
INSERT INTO menu_categories (name) VALUES ('beverages');
INSERT INTO menu_categories (name) VALUES ('entres');
INSERT INTO menu_categories (name) VALUES ('desserts');

INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
VALUES (1,'Nachos', 'Tasty Nachos', 'nachos.jpg', 999);
INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
VALUES (1,'Cheese Sticks', 'Tasty Cheese Sticks', 'cheese_sticks.jpg', 799);
INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
VALUES (1,'Tossed Salad', 'Fresh Tossed Salad', 'tossed_salad.jpg', 550);

INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
VALUES (2,'Fountain drinks', 'Refreshing Fountain Drink', 'fountain_drink.jpg', 199);
INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
VALUES (2,'Flavored tea or lemonade', 'Refreshing flavored tea or lemonade', 'tea_lemonade.jpg', 275);
INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
VALUES (2,'Coffee', 'Fresh brewed coffee', 'coffee.jpg', 199);

INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
VALUES (3,'Super Taco', 'Delicious super Taco', 'super_taco.jpg', 899);
INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
VALUES (3,'Enchiladas', 'Delicious enchiladas', 'enchiladas.jpg', 1099);
INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
VALUES (3,'Rancheros', 'Delicious rancheros', 'rancheros.jpg', 1599);

INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
VALUES (4,'Fried Ice Cream', 'Tasty fried ice cream', 'fried_ice_cream.jpg', 899);
INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
VALUES (4,'Churros', 'Delicious churros', 'churros.jpg', 575);
INSERT INTO menu_items (menu_category_id, name, description, image_url, price)
VALUES (4,'Tortilla Crisp', 'Delicious tortilla crisp', 'tortilla_crisp.jpg', 1599);

