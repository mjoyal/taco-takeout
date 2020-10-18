const db = require('../connection/db-conn');
const getAllMenuItems = function() {
  return db.query(`SELECT * FROM menu_items`)
    .then((res) => {
      //console.log(res.rows);
      return res.rows;
    });
};
exports.getAllMenuItems = getAllMenuItems;

