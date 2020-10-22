module.exports = (router /*, helpers*/, db) => {
  router.get('/:id', (req, res) => {
    const order_id = req.params.id;
    return db.query(`
    SELECT orders.id as order_id, menu_items.name, menu_items.price, order_menu_items.quantity
    FROM orders
    JOIN order_menu_items ON orders.id = order_id
    JOIN menu_items ON menu_item_id = menu_items.id
    WHERE order_started_at IS NULL;
    `, [order_id])
    .then((data) => {
      res.render('checkout', data.rows[0]);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });
};
