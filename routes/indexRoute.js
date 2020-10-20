const menuItemHelpers = require('../db/dbHelpers/menuItemHelpers');
const userHelpers = require('../db/dbHelpers/userHelpers');
const orderHelpers = require('../db/dbHelpers/orderHelpers');
//const orderItemsHelpers = require("../db/dbHelpers/orderItemsHelpers");
const menuItemFormatter = require("../helperfunctions/menuItemFormatter");
const { app } = require("../server");

const getIndex = (db) => {
  app.get("/", (req, res) => {
    const menuItems = menuItemHelpers.getAllMenuItems(db);
    const currentUser = userHelpers.getUserById(1, db);
    const currentCartItems = orderHelpers.getUserCart(1, db);
    Promise.all([menuItems, currentUser, currentCartItems]).then(values => {
      return values;
    }).then(values => {
      values[0] = menuItemFormatter.formatMenuItems(values[0]);
      return values;
    }).then(values => {
      values[2] = menuItemFormatter.formatMenuItems(values[2]);
      return values;
    }).then(values => {
      const templateVars = {
        menu_items: values[0],
        user: values[1],
        currentCartItems: values[2]
      };
      res.render('index', templateVars);
    }).catch(e => {
      res.send(e);
    });




    //menuItemHelpers.getAllMenuItems()
    // .then(data => {
    //   const info = menuItemFormatter.formatMenuItems(data);
    //   return info;
    // })
    // .then(data => {
    //   res.render('index', { menu_items: data });
    // })
    // .catch(e => {
    // res.send(e);
    //});
  });
};
module.exports = { getIndex };
