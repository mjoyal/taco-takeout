const db = require('../connection/db-conn');

const getUserCartData = function(user_id, order_id) {

  return db.query(`
  SELECT order_menu_items.id, order_menu_items.order_id, order_menu_items.menu_item_id, menu_items.name,menu_items.price, order_menu_items.quantity FROM orders
JOIN order_menu_items ON orders.id = order_menu_items.order_id
JOIN menu_items ON order_menu_items.menu_item_id=menu_items.id
WHERE orders.user_id=$1 AND orders.order_placed_at IS NULL AND order_menu_items.order_id=$2`, [user_id, order_id])
    .then((res) => {
      //console.log(res.rows);
      return res.rows;
    }).catch((e) => {
      console.log(e);
    });
};





//Increment item qunatity if item exists in cart
const incrementCartItem = function(db, data, menu_item_id) {
  //Get order id from data object
  const order_id = data[0].order_id;
  //convert menu id to integer
  const menu_id_int = parseInt(menu_item_id);
  let newQuantity = 0;
  let idToEdit = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].menu_item_id === menu_id_int) {
      newQuantity = parseInt(data[i].quantity) + 1;
      idToEdit = parseInt(data[i].id);
    }
  }
  return db.query(`
   UPDATE order_menu_items
   SET quantity = $1
   WHERE order_id = $2 AND menu_item_id=$3;`,
    [newQuantity, order_id, menu_id_int])
    .then((res) => {
      return res.rows;
    }).catch(err => {
    });;
};

//Add new cart menu item if not already exists
const addCartItem = function(db, data, menu_item_id) {
  const itemToAdd = parseInt(menu_item_id);
  //Get order id from data object
  const order_id = parseInt(data[0].order_id);
  //Insert new row
  return db.query(`
    INSERT INTO order_menu_items (order_id, menu_item_id, quantity)
    VALUES ($1, $2, $3);`,
    [order_id, itemToAdd, 1])
    .then((res) => {
      return res.rows;
    }).catch(err => {
    });;
};

// db.insert(myawesomeRecord)
//   .then(function(insertedRectordActual) {
//     magic response;
//   }).catch(function(err) {
//     fuck;
//   });
//Remove item from cart if quantity 0
const removeCartItem = function(db, data, menu_item_id) {
  const menu_id_int = parseInt(menu_item_id);
  order_id = data[0].order_id;
  const order_id_int = parseInt(order_id);
  //Delete row
  return db.query(`
  DELETE FROM order_menu_items
  WHERE order_id = $1 AND menu_item_id = $2;`,
    [order_id_int, menu_id_int])
    .then((res) => {
      return res.rows;
    }).catch(err => {
    });;
};

//Decrement item qunatity if item count > 1
const decrementCartItem = function(db, data, menu_item_id) {
  //Get order id from data object
  const order_id = data[0].order_id;
  //convert menu id to integer
  const menu_id_int = parseInt(menu_item_id);
  let newQuantity = 0;
  let idToEdit = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].menu_item_id === menu_id_int) {
      newQuantity = parseInt(data[i].quantity) - 1;
      idToEdit = parseInt(data[i].id);
    }
  }
  //Update row
  return db.query(`
  UPDATE order_menu_items
  SET quantity = $1
  WHERE order_id = $2 AND menu_item_id=$3;`,
    [newQuantity, order_id, menu_id_int])
    .then((res) => {
      return res.rows;
    }).catch(err => {
    });;
};

//Create new row with item quantity = 1 if no cart exists
const createCart = function(order_id, menu_item_id) {
  const itemToAdd = parseInt(menu_item_id);
  return db.query(`
  INSERT INTO order_menu_items (order_id, menu_item_id, quantity)
  VALUES ($1, $2, 1);`, [order_id, itemToAdd]
  )
    .then((res) => {
      return res.rows;
    }).catch(err => {
    });;
};

const createNewOrder = function(user_id) {
  return db.query(`INSERT INTO orders (user_id)
  VALUES($1)
  RETURNING id, user_id;`, [user_id]
  )
    .then((res) => {
      //console.log(res.rows);
      return res.rows;
    }).catch(err => {
      console.log(err);
    });;
};

const getUnplacedOrder = function(user_id) {
  return db.query(`
  SELECT * FROM orders WHERE orders.user_id=$1 AND orders.order_placed_at IS NULL;`, [user_id])
    .then((res) => {
      return res.rows;
    }).catch((e) => {
      console.log(e);
    });
};

const getUserOpenOrder = function(user_id) {
  return db.query(`
  SELECT * FROM orders
  WHERE orders.user_id=$1 AND orders.order_placed_at IS NULL;`, [user_id])
    .then((res) => {
      if (res.rowCount === 0) {
        createNewOrder(user_id).then((res) => {
          //console.log(res.rowCount);
          return res.rows;
        });
      }
      return res.rows;
    }).catch((e) => {
      console.log(e);
    });
};

module.exports = { getUserOpenOrder, getUnplacedOrder, createNewOrder, addCartItem, createCart, decrementCartItem, incrementCartItem, removeCartItem, incrementCartItem, getUserCartData };
