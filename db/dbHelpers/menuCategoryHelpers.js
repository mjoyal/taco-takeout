const db = require('../connection/db-conn');
const getAllMenuCategories = function() {
  return db.query(`SELECT * FROM menu_categories`)
    .then((res) => {
      console.log(res.rows);
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};
exports.getAllMenuCategories = getAllMenuCategories;
