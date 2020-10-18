/*
 * All routes for Menu Items are defined here
 * Since this file is loaded in server.js into api/menu_items,
 * these routes are mounted onto /menu_items
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

module.exports = function(router, menuItemsHelper) {
  router.get("/", (req, res) => {
    menuItemsHelper.getAllMenuItems()
      .then(data => {
        res.render('ebmenuitems', { menu_items: data });
      })
      .catch(e => {
        res.send(e);
      });
  });
  return router;
};
