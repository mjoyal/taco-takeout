const menuItemHelpers = require('../db/dbHelpers/menuItemHelpers');
const userHelpers = require('../db/dbHelpers/userHelpers');
const menuItemFormatter = require("../helperfunctions/menuItemFormatter");
const { app } = require("../server");

const getIndex = () => {
  app.get("/", (req, res) => {
    const menuItems = menuItemHelpers.getAllMenuItems();
    const currentUser = userHelpers.getUserById(1);
    //const currentOrder = orderHelpers.getCurrentUserOrder(1);
    Promise.all([menuItems, currentUser]).then(values => {
      console.log(values[0]);
      console.log(values[1]);
      return values;
    }).then(values => {
      const info = menuItemFormatter.formatMenuItems(values[0]);
      return info;
    }).then(data => {
      res.render('index', { menu_items: data });
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
