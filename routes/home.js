const express = require('express');
const router = express.Router();
module.exports = function(router, menuItemsHelper) {
  router.get("/", (req, res) => {
    menuItemsHelper.getAllMenuItems()
      .then(data => {
        res.render('index', { menu_items: data });
      })
      .catch(e => {
        res.send(e);
      });
  });
  return router;
};
module.exports = router;
