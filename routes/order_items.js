const db = require('../db/connection/db-conn');
const orderHelperFunctions = require('../helperfunctions/orderHelperFunctions');
//const helpers = require("../helperfunctions/orderItemsHelpers");
module.exports = function(router, helpers) {
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
  router.post('/add/:id', function(req, res) {
    const menu_item_id = req.params.id;
    console.log("rp: ", req.params.id);
    const user_id = 1;
    helpers.getUserCartData(user_id).then(data => {
      //console.log("data: ", data);
      return data;
    })
      .then(data => {
        console.log("data: ", data);
        if (data.length === 0) {
          console.log("data: empty");
          helpers.createCart(menu_item_id);
        } else {
          const orderItemExists = orderHelperFunctions.getMenuItemFromCart(data, menu_item_id);
          //console.log(orderItemExists);
          if (orderItemExists) {
            helpers.incrementCartItem(db, data, menu_item_id);
          } else {
            helpers.addCartItem(db, data, menu_item_id);
          }
        }
      })
      .then(
        res.redirect('/')
      ).catch(err => {
        //res.send(err);
      });
  });
  router.post('/remove/:id', function(req, res) {
    //console.log("req", req.params.id);
    const menu_item_id = req.params.id;
    const user_id = 1;
    helpers.getUserCartData(user_id)
      .then(data => {

        return data;
      })
      .then(data => {
        //console.log(data);
        const orderItemCount = orderHelperFunctions.getMenuItemCountFromCart(data, menu_item_id);
        if (orderItemCount > 1) {
          helpers.decrementCartItem(db, data, menu_item_id);
        } else {
          helpers.removeCartItem(db, data, menu_item_id);
        }
      }
      )
      .then(
        res.redirect('/')
      ).catch(err => {
        // res
        //   .status(500)
        //   .json({ error: err.message });
      });
    // );
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


