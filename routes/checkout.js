const menuItemHelpers = require('../db/dbHelpers/menuItemHelpers');
const userHelpers = require('../db/dbHelpers/userHelpers');
const orderHelpers = require('../db/dbHelpers/orderHelpers');
const orderItemHelpers = require('../db/dbHelpers/orderItemsHelpers');
const menuItemFormatter = require("../helperfunctions/menuItemFormatterFunctions");
const { app } = require("../server");
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



// module.exports = (router /*, helpers*/, db) => {

//   router.get('/', (req, res) => {
//     let templateVars = {};
//     const user_id = 1;
//     const currentCartItems = orderHelpers.getUserCart(user_id, db)
//       .then((data) => {
//         //console.log(data);
//         //console.log(currentCartItems);
//         return values;
//       }).then(values => {
//         values = menuItemFormatter.formatCartItems(values[2]);
//         return values;
//       }).then(values => {
//         const cartTotal = menuItemFormatter.calculateCartTotal(values);
//         return values;
//       }).then(values => {
//         templateVars = {
//           menu_items: values[0],
//           user: values[1],
//           currentCartItems: values[2],
//           cartHasItems: cartHasItems,
//           cartTotal: cartTotal
//         };
//         return values;
//       }).then(values => {
//         console.log(templateVars);
//         res.render('checkout', templateVars);
//         return values;
//       }
//       ).catch(e => {
//         res.send(e);
//       });;
//   });
// };
