const db = require('../connection/db-conn');
const getAllUsers = function() {
  return db.query(`SELECT * FROM users`)
    .then((res) => {
      console.log(res.rows);
      return res.rows;
    });
};
exports.getAllUsers = getAllUsers;
