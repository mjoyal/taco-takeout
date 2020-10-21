module.exports = (router, db) => {
  router.get("/users", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        res.send(data.rows);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/menuitems", (req, res) => {
    db.query(`SELECT * FROM menu_items;`)
      .then(data => {
        res.send(data.rows);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/menucategories", (req, res) => {
    db.query(`SELECT * FROM menu_categories;`)
      .then(data => {
        res.send(data.rows);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/orders", (req, res) => {
    db.query(`SELECT * FROM orders;`)
      .then(data => {
        res.send(data.rows);
        return data.rows[0];
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
