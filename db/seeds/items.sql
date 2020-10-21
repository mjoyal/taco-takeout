
SELECT orders.id, order_menu_items.order_id, order_menu_items.menu_item_id, menu_items.name, sum(menu_items.price), sum(order_menu_items.quantity) FROM orders
JOIN order_menu_items ON orders.id = order_menu_items.order_id
JOIN menu_items ON order_menu_items.menu_item_id=menu_items.id
WHERE orders.user_id=1 AND orders.order_placed_at IS NULL
GROUP BY order_menu_items.order_id,orders.id,order_menu_items.menu_item_id,menu_items.name;