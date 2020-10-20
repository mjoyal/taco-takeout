
const getAllOrders = function(db) {
  return db.query(`SELECT * FROM orders`)
    .then((res) => {
      console.log(res.rows);
      return res.rows;
    });
};

const getUserCart = function(user_id, db) {
  return db.query(`
  SELECT orders.id, order_menu_items.order_id, order_menu_items.menu_item_id, menu_items.name,menu_items.price, order_menu_items.quantity FROM orders
  JOIN order_menu_items ON orders.id = order_menu_items.order_id
  JOIN menu_items ON order_menu_items.menu_item_id=menu_items.id
  WHERE orders.user_id=$1 AND orders.order_placed_at IS NULL`, [user_id])
    .then((res) => {
      //console.log(res.rows);
      return res.rows;
    }).catch(err => {
      console.log(err);
    });;
};
module.exports = { getAllOrders, getUserCart };
