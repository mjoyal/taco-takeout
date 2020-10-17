-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS menu_categories CASCADE;
DROP TABLE IF EXISTS menu_items CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  password VARCHAR(255) NOT NULL,
  mobile_phone VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  is_customer BOOLEAN NOT NULL
);


CREATE TABLE menu_categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  menu_category_id INTEGER REFERENCES menu_categories(id),
  name VARCHAR(50) NOT NULL,
  description VARCHAR(255) NOT NULL,
  image_url VARCHAR(50) NOT NULL,
  price SMALLINT NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  menu_item_id INTEGER REFERENCES menu_items(id),
  quantity int NOT NULL,
  order_placed_at TIMESTAMP,
  order_started_at TIMESTAMP,
  order_completed_at TIMESTAMP
);


