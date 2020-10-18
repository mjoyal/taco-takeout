/*
 * All routes for Orders are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

module.exports = (router, helpers) => {
  router.get("/", (req, res) => {
    helpers.getAllOrders()
      .then(data => {
        const orders = data.rows;
        res.json({ orders });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

  });
  return router;
};


