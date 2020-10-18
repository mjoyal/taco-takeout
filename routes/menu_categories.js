/*
 * All routes for Menu Categories are defined here
 * Since this file is loaded in server.js into api/menu_items,
 *   these routes are mounted onto /menu_categories
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = `SELECT * FROM menu_categories`;
    console.log(query);
    db.query(query)
      .then(data => {
        const menu_categories = data.rows;
        res.json({ menu_categories });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
