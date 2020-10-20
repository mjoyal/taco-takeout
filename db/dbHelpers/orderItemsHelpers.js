//const db = require('../connection/db-conn');

const getUserCartData = function(db, user_id) {
  return db.query(`
  SELECT orders.id, order_menu_items.order_id, order_menu_items.menu_item_id, menu_items.name,menu_items.price, order_menu_items.quantity FROM orders
  JOIN order_menu_items ON orders.id = order_menu_items.order_id
  JOIN menu_items ON order_menu_items.menu_item_id=menu_items.id
  WHERE orders.user_id=$1 AND orders.order_placed_at IS NULL`, [user_id])
    .then((res) => {
      //console.log(res.rows);
      return res.rows;
    }).catch((res) => {
      //db.release();
    });
};
const incrementCartItem = function(db, data, menu_item_id) {
  const itemToIncrease = parseInt(menu_item_id);
  let newQuantity = 0;
  let idToEdit = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].menu_item_id === itemToIncrease) {
      console.log(data[i]);
      newQuantity = parseInt(data[i].quantity) + 1;
      idToEdit = parseInt(data[i].id);
    }
  }
  return db.query(`
  UPDATE order_menu_items
  SET quantity = $1
  WHERE id = $2;`,
    [newQuantity, idToEdit])
    .then((res) => {
      //console.log(res.rows);
      return res.rows;
    }).catch(err => {
    });;
};
const addCartItem = function(db, data, menu_item_id) {
  const itemToIncrease = parseInt(menu_item_id);
  console.log(data[0]);
  return db.query(`
  INSERT INTO order_menu_items (order_id, menu_item_id, quantity)
  VALUES (1, $1, $2);`,
    [itemToIncrease, 1])
    .then((res) => {
      //console.log(res.rows);
      return res.rows;
    }).catch(err => {
    });;
};

const removeCartItem = function(db, data, menu_item_id) {
  const itemToIncrease = parseInt(menu_item_id);
  let newQuantity = 0;
  let idToEdit = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].menu_item_id === itemToIncrease) {
      console.log(data[i]);
      newQuantity = parseInt(data[i].quantity) + 1;
      idToEdit = parseInt(data[i].id);
    }
  }
  return db.query(`
  UPDATE order_menu_items
  SET quantity = $1
  WHERE id = $2;`,
    [newQuantity, idToEdit])
    .then((res) => {
      //console.log(res.rows);
      return res.rows;
    }).catch(err => {

    }).catch(err => {
      console.log(err);
    });
};
const decrementCartItem = function(db, data, menu_item_id) {
  const itemToIncrease = parseInt(menu_item_id);
  let newQuantity = 0;
  let idToEdit = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].menu_item_id === itemToIncrease) {
      console.log(data[i]);
      newQuantity = parseInt(data[i].quantity) + 1;
      idToEdit = parseInt(data[i].id);
    }
  }
  return db.query(`
  UPDATE order_menu_items
  SET quantity = $1
  WHERE id = $2;`,
    [newQuantity, idToEdit])
    .then((res) => {
      //console.log(res.rows);
      return res.rows;
    }).catch(err => {

    });;
};





// SELECT order_menu_items.id, order_menu_items.order_id, order_menu_items.menu_item_id, order_menu_items.quantity FROM orders;
// JOIN order_menu_items ON orders.id = order_menu_items.order_id;
// JOIN menu_items ON order_menu_items.menu_item_id = menu_items.id;
// WHERE orders.user_id = $1 AND orders.order_placed_at IS NULL


module.exports = { addCartItem, incrementCartItem, removeCartItem, incrementCartItem, getUserCartData };
