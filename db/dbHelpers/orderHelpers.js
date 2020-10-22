//API Query
const getAllOrders = function(db) {
  return db.query(`SELECT * FROM orders`)
    .then((res) => {
      return res.rows;
    });
};

//Get unplaced order items for current user
const getUserCart = function(user_id, db) {
  return db.query(`
  SELECT orders.id, order_menu_items.order_id, order_menu_items.menu_item_id, menu_items.name, sum(menu_items.price) AS total, sum(order_menu_items.quantity)AS count FROM orders
JOIN order_menu_items ON orders.id = order_menu_items.order_id
JOIN menu_items ON order_menu_items.menu_item_id=menu_items.id
WHERE orders.user_id=$1 AND orders.order_placed_at IS NULL
GROUP BY order_menu_items.order_id,orders.id,order_menu_items.menu_item_id,menu_items.name`, [user_id])
    .then((res) => {
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};
module.exports = { getAllOrders, getUserCart };
