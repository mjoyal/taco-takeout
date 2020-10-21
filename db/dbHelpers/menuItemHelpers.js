//API Query
const getAllMenuItems = function(db) {
  return db.query(`SELECT * FROM menu_items`)
    .then((res) => {
      return res.rows;
    })
    .catch(err => {
      console.log(err);
    });
  ;
};
exports.getAllMenuItems = getAllMenuItems;

