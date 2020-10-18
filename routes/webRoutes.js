const express = require("express");
const menuItemsHelpers = require('../db/dbHelpers/menuItemHelpers');
const usersHelpers = require('../db/dbHelpers/userHelpers');
const menuCategoriesHelpers = require('../db/dbHelpers/menuCategoryHelpers');
const ordersHelpers = require('../db/dbHelpers/orderHelpers');
const { app } = require("../server");

function webRoutes() {

  const homeRouter = express.Router();
  const homeRoutes = require('./home');
  //homeRoutes(homeRouter, menuItemsHelpers);
  app.use('/', homeRouter);

  const menuItemsRouter = express.Router();
  const menuItemsRoutes = require("./menu_items");
  menuItemsRoutes(menuItemsRouter, menuItemsHelpers);
  app.use('/menuitems', menuItemsRouter);

  const menuCategoriesRouter = express.Router();
  const menuCategoriesRoutes = require("./menu_categories");
  menuCategoriesRoutes(menuCategoriesRouter, menuCategoriesHelpers);
  app.use('/menucategories', menuCategoriesRouter);

  const usersRouter = express.Router();
  const usersRoutes = require("./users");
  usersRoutes(usersRouter, usersHelpers);
  app.use('/users', usersRouter);

  const ordersRouter = express.Router();
  const ordersRoutes = require("./orders");
  ordersRoutes(ordersRouter, ordersHelpers);
  app.use('/orders', ordersRouter);

  //For Api Testing
  const apiRouter = express.Router();
  const apiRoutes = require("./api");
  apiRoutes(apiRouter);
  app.use('/api', apiRouter);
}
exports.webRoutes = webRoutes;
