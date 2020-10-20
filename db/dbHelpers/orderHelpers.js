
const getAllOrders = function(db) {
  return db.query(`SELECT * FROM orders`)
    .then((res) => {
      console.log(res.rows);
      return res.rows;
    });
};

const getUserCart = function(user_id, db) {
  return db.query(`
  SELECT * FROM orders
  JOIN order_menu_items ON orders.id = order_menu_items.order_id
  JOIN menu_items ON order_menu_items.menu_item_id=menu_items.id
  WHERE orders.user_id=$1 AND orders.order_placed_at IS NULL`, [user_id])
    .then((res) => {
      //console.log(res.rows);
      return res.rows;
    });
};

module.exports = { getAllOrders, getUserCart };
