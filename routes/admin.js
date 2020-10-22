const menuItemFormatter = require("../helperfunctions/menuItemFormatterFunctions");
const { findIds } = require("../helperfunctions/menuItemFormatterFunctions");

module.exports = (router, helpers, db) => {

  router.get('/', (req, res) => {
    return db.query(`
    SELECT orders.id as order_id, menu_items.name, menu_items.price, order_menu_items.quantity
    FROM orders
    JOIN order_menu_items ON orders.id = order_id
    JOIN menu_items ON menu_item_id = menu_items.id
    WHERE order_started_at IS NULL;
    `)
      .then(data => {
        const reformatedData = findIds(data.rows);
        res.render('admin', { orders: reformatedData });
        return data.rows;
      })
      .catch(e => {
        res.send(e);
      });
  });

  router.post('/', (req, res) => {
    const minutes = req.body.waitTime;
    const order_id = req.body.order_id;
    return db.query(`UPDATE orders
    SET order_time = $1, order_started_at = Now()
    WHERE id = $2
    RETURNING *;
    `, [minutes, order_id])
      .then(data => {
        res.redirect(`/admin`);
        return data.rows;
      });
  });


};
