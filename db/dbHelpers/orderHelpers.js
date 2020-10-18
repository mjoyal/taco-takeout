const db = require('../connection/db-conn');
const getAllOrders = function() {
  return db.query(`SELECT * FROM orders`)
    .then((res) => {
      console.log(res.rows);
      return res.rows;
    });
};
exports.getAllOrders = getAllOrders;
