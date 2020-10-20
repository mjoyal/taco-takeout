const db = require('../connection/db-conn');
const getAllUsers = function() {
  return db.query(`SELECT * FROM users`)
    .then((res) => {
      console.log(res.rows);
      return res.rows;
    });
};
const getUserById = function(id) {
  return db.query(`SELECT * FROM users WHERE id =$1`, [id])
    .then((res) => {
      return res.rows;
    });
};
module.exports = { getAllUsers, getUserById };

