//API Query
//Get all users
const getAllUsers = function(db) {
  return db.query(`SELECT * FROM users`)
    .then((res) => {
      //console.log(res.rows);
      return res.rows;
    }).catch(err => {
      console.log(err);
    });;
};
//Get user by id
const getUserById = function(id, db) {
  return db.query(`SELECT * FROM users WHERE id =$1`, [id])
    .then((res) => {
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};
module.exports = { getAllUsers, getUserById };

