const LocalStorage = require('node-localstorage').LocalStorage;

/*
 * All routes for Orders are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const db = require('../db/connection/db-conn');

module.exports = (router, helpers) => {
  // Get all orders
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

  // Add item to order
  router.post('/addCartItem/:id', function(req, res) {
    helpers.getUserCart().then(data => {
      if (data.length !== 0) {
        console.log("1");
      } else {
        console.log("0");
      }

    });



  });

  //Remove item from order
  router.get('/removeitem', function(req, res) {

  });




  router.get('/:id', (req, res) => {
    const order_id = req.params.id;
    return db.query(`
    SELECT orders.id as order_id, users.first_name
    FROM orders
    JOIN users ON orders.user_id = users.id
    WHERE orders.id = $1
    `, [order_id])
      .then((data) => {
        console.log(data.rows[0]);
        res.render('order', data.rows[0]);
        return data.rows;
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};


