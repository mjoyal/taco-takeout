module.exports = (router, helpers, db) => {
  router.get('/:id', (req, res) => {
    const order_id = req.params.id;
    return db.query(`
    SELECT orders.id as order_id, users.first_name
    FROM orders
    JOIN users ON orders.user_id = users.id
    WHERE orders.id = $1
    `, [order_id])
      .then((data) => {
        //console.log(data.rows[0]);
        res.render('order', data.rows[0]);
        return data.rows;
      })
      .catch(err => {
        res.status(500);
      });
  });

  router.get('/:id/status', (req, res) => {
    const order_id = req.params.id;
    return db.query(`SELECT order_started_at, order_time
    FROM orders
    WHERE orders.id = $1
    `, [order_id])
      .then((data) => {
        res.send(data.rows);
        return data.rows;
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

  });

};


