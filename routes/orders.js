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
  // router.post('/addCartItem/:id', function(req, res) {
  //   const menu_item_id = req.params.id;
  //   const user_id = 1;
  //   helpers.getUserCart(menu_item_id).then(data => {
  //     //console.log(data);
  //     return data;
  //   }).then(data => {
  //     console.log(menu_item_id);
  //     cartItemHelpers.addItemToCart(data, menu_item_id);
  //   }
  //   )
  //     .then(
  //       res.redirect('/')
  //     ).catch(err => {
  //       res
  //         .status(500)
  //         .json({ error: err.message });
  //     });
  //   // );
  // });

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

};


