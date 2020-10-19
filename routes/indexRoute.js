const menuItemHelpers = require('../db/dbHelpers/menuItemHelpers');
const menuItemFormatter = require("../helperfunctions/menuItemFormatter");
const { app } = require("../server");

const getIndex = () => {
  app.get("/", (req, res) => {
    //const menuItems = menuItemHelpers.getAllMenuItems();
    //const menuItems2 = menuItemHelpers.getAllMenuItems();

    // Promise.all([menuItems, menuItems2]).then(values => {
    //   console.log(values);
    // })

    menuItemHelpers.getAllMenuItems()
      .then(data => {
        const info = menuItemFormatter.formatMenuItems(data);
        return info;
      })
      .then(data => {
        res.render('index', { menu_items: data });
      })
      .catch(e => {
        res.send(e);
      });
  });
};
module.exports = { getIndex };
