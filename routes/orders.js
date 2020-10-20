const LocalStorage = require('node-localstorage').LocalStorage;

/*
 * All routes for Orders are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

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
    // const templateVars = {
    //   urls: urlDatabase,
    //   user: getUserById(req.session.user_id, users),
    //   longURL: ""
    // };
    // if (req.session.user_id) {
    //   res.render('urls_new', templateVars);
    // } else {
    //   res.redirect(`/`);
    // }
  });

  return router;
};


