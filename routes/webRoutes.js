const express = require("express");
const menuItemsHelpers = require('../db/dbHelpers/menuItemHelpers');
const usersHelpers = require('../db/dbHelpers/userHelpers');
const menuCategoryHelpers = require('../db/dbHelpers/menuCategoryHelpers');
const ordersHelpers = require('../db/dbHelpers/orderHelpers');
const orderItemsHelpers = require('../db/dbHelpers/orderItemsHelpers');
const { app } = require("../server");

function webRoutes(db) {

  const menuItemsRouter = express.Router();
  const menuItemsRoutes = require("./menu_items");
  menuItemsRoutes(menuItemsRouter, menuItemsHelpers, db);
  app.use('/menuitems', menuItemsRouter);

  const orderItemsRouter = express.Router();
  const orderItemsRoutes = require("./order_items");
  orderItemsRoutes(orderItemsRouter, orderItemsHelpers, db);
  app.use('/orderitems', orderItemsRouter);

  const menuCategoriesRouter = express.Router();
  const menuCategoriesRoutes = require("./menu_categories");
  menuCategoriesRoutes(menuCategoriesRouter, menuCategoryHelpers, db);
  app.use('/menucategories', menuCategoriesRouter);

  const usersRouter = express.Router();
  const usersRoutes = require("./users");
  usersRoutes(usersRouter, usersHelpers, db);
  app.use('/users', usersRouter);

  const ordersRouter = express.Router();
  const ordersRoutes = require("./orders");
  ordersRoutes(ordersRouter, ordersHelpers, db);
  app.use('/order', ordersRouter);

  const checkoutRouter = express.Router();
  const checkoutRoutes = require("./checkout");
  checkoutRoutes(checkoutRouter, db);
  app.use('/checkout', checkoutRouter);

  const adminRouter = express.Router();
  const adminRoutes = require("./admin");
  adminRoutes(adminRouter, ordersHelpers, db);
  app.use('/admin', adminRouter);

  //For Api Testing (Via Postman)
  const apiRouter = express.Router();
  const apiRoutes = require("./api");
  apiRoutes(apiRouter, db);
  app.use('/api', apiRouter);
}
exports.webRoutes = webRoutes;
