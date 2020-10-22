const menuItemHelpers = require('../db/dbHelpers/menuItemHelpers');
const userHelpers = require('../db/dbHelpers/userHelpers');
const orderHelpers = require('../db/dbHelpers/orderHelpers');
const orderItemHelpers = require('../db/dbHelpers/orderItemsHelpers');
const menuItemFormatter = require("../helperfunctions/menuItemFormatterFunctions");
const { app } = require("../server");

const getIndex = (db) => {
  const user_id = 1;
  app.get("/", (req, res) => {
    let templateVars = {};
    orderItemHelpers.getUnplacedOrder(user_id).then((data) => {
      const menuItems = menuItemHelpers.getAllMenuItems(db);
      const currentUser = userHelpers.getUserById(user_id, db);
      const currentCartItems = orderHelpers.getUserCart(user_id, db);
      Promise.all([menuItems, currentUser, currentCartItems]).then(values => {
        return values;
      }).then(values => {
        values[0] = menuItemFormatter.formatMenuItems(values[0]);
        return values;
      }).then(values => {
        values[2] = menuItemFormatter.formatCartItems(values[2]);
        return values;
      }).then(values => {
        // sets visibility of empty cart
        let cartHasItems = 0;
        //calculate and format total for cart contents an pass as a templatevar
        const cartTotal = menuItemFormatter.calculateCartTotal(values);
        if (values[2].length) {
          cartHasItems = 1;
        }
        templateVars = {
          menu_items: values[0],
          user: values[1],
          currentCartItems: values[2],
          cartHasItems: cartHasItems,
          cartTotal: cartTotal
        };
        //console.log(templateVars);
        return values;
      }).then(values => {
        res.render('index', templateVars);
        return values;
      }).catch(e => {
        res.status(500);
      });
    });
  });
};
module.exports = { getIndex };
