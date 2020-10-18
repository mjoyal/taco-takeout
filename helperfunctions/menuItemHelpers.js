const menuItemHelpers = require("../db/dbHelpers/menuItemHelpers");
function menuItemsFormatter() {
  const menuItems = menuItemHelpers.getAllMenuItems()
    .then(menuItems => {
      console.log(menuItems);
    }).catch(err => {
      console.log(err);
    })
    ;
}
menuItemsFormatter();

