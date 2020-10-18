const express = require("express");
const menuItemsHelpers = require('../db/dbHelpers/menuItemHelpers');
const usersHelpers = require('../db/dbHelpers/userHelpers');
const menuCategoriesHelpers = require('../db/dbHelpers/menuCategoryHelpers');
const ordersHelpers = require('../db/dbHelpers/orderHelpers');
const { app } = require("../server");

function webRoutes() {

  app.use('/', require('./home'));

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

  const checkoutRouter = express.Router();
  const checkoutRoutes = require("./checkout");
  checkoutRoutes(checkoutRouter);
  app.use('/checkout', checkoutRouter);

  const orderSentRouter = express.Router();
  const orderSentRoutes = require("./order_sent");
  orderSentRoutes(orderSentRouter);
  app.use('/order-sent', orderSentRouter);

  const confirmedRouter = express.Router();
  const confirmedRoutes = require("./order_confirmed");
  confirmedRoutes(confirmedRouter);
  app.use('/order-confirmed', confirmedRouter);

  const adminRouter = express.Router();
  const adminRoutes = require("./admin");
  adminRoutes(adminRouter);
  app.use('/admin', adminRouter);

  //For Api Testing
  const apiRouter = express.Router();
  const apiRoutes = require("./api");
  apiRoutes(apiRouter);
  app.use('/api', apiRouter);
}
exports.webRoutes = webRoutes;
