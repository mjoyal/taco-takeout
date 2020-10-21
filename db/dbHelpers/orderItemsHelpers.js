const db = require('../connection/db-conn');

const getUserCartData = function(user_id) {
  return db.query(`
  SELECT orders.id, order_menu_items.order_id, order_menu_items.menu_item_id, menu_items.name,menu_items.price, order_menu_items.quantity FROM orders
  JOIN order_menu_items ON orders.id = order_menu_items.order_id
  JOIN menu_items ON order_menu_items.menu_item_id=menu_items.id
  WHERE orders.user_id=$1 AND orders.order_placed_at IS NULL;`, [user_id])
    .then((res) => {
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
  //Update row with new quantity
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
  order_id = data[0].order_id;
  console.log(data[0]);
  //Insert new row
  return db.query(`
  INSERT INTO order_menu_items (order_id, menu_item_id, quantity)
  VALUES (1, $1, $2);`,
    [itemToAdd, 1])
    .then((res) => {
      console.log(res.rows);
      return res.rows;
    }).catch(err => {
    });;
};

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
const createCart = function(menu_item_id) {
  const itemToAdd = parseInt(menu_item_id);
  console.log("ita: ", menu_item_id);
  return db.query(`
  INSERT INTO order_menu_items (order_id, menu_item_id, quantity)
  VALUES (1, $1, 1);`, [itemToAdd]
  )
    .then((res) => {
      console.log(res.rows);
      return res.rows;
    }).catch(err => {
    });;

};

module.exports = { addCartItem, createCart, decrementCartItem, incrementCartItem, removeCartItem, incrementCartItem, getUserCartData };
