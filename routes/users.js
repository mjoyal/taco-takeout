/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

module.exports = function(router, helper, db) {
  router.get("/", (req, res) => {
    helper.getAllUsers(db)
      .then(data => {
        //const menu_categories = data.rows;
        res.json(data);
      })
      .catch(e => {
        res.send(e);
      });
  });
  return router;
};
