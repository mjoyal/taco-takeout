
const getAllUsers = function(db) {
  return db.query(`SELECT * FROM users`)
    .then((res) => {
      console.log(res.rows);
      return res.rows;
    });
};
const getUserById = function(id, db) {
  return db.query(`SELECT * FROM users WHERE id =$1`, [id])
    .then((res) => {
      console.log(res.rows);
      return res.rows;
    });
};
module.exports = { getAllUsers, getUserById };

