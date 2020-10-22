//Calls menu item query to and re
module.exports = function(router, menuItemsHelper, db) {
  router.get("/", (req, res) => {
    menuItemsHelper.getAllMenuItems(db)
      .then(data => {
        res.render('index', { menu_items: data });
      })
      .catch(e => {
        res.status(500);
      });
  });
  return router;
};
