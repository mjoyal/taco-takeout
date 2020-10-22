/*
 * All routes for Menu Categories are defined here
 * Since this file is loaded in server.js into api/menu_items,
 *   these routes are mounted onto /menu_categories
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

module.exports = function(router, helper, db) {
  router.get("/", (req, res) => {
    helper.getAllMenuCategories(db)
      .then(data => {
        //const menu_categories = data.rows;
        res.json(data);
      })
      .catch(e => {
        res.status(500);
      });
  });
  return router;
};
