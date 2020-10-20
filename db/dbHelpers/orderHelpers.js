const db = require('../connection/db-conn');
const getAllOrders = function() {
  return db.query(`SELECT * FROM orders`)
    .then((res) => {
      console.log(res.rows);
      return res.rows;
    });
};

const getUserCart = function() {
  return db.query(`
  SELECT * FROM orders
  WHERE orders.order_placed_at IS NOT NULL AND
  orders.user_id=1`)
    .then((res) => {
      console.log(res.rows);
      return res.rows;
    });
};

module.exports = { getAllOrders, getUserCart };
