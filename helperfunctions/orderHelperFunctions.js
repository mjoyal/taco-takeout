//const db = require('../db/connection/db-conn');

const removeItemFromCart = (data) => {
  const priceString = (item.price / 100).toFixed(2);
  const priceDollars = `$${priceString}`;
  return priceDollars;
};
const getMenuItemFromCart = function(data, menu_item_id) {
  //console.log("in helper");
  for (let i = 0; i < data.length; i++) {
    if (data[i].menu_item_id === parseInt(menu_item_id)) {
      return data[i].id;
    }
  }
};
const getMenuItemCountFromCart = function(data, menu_item_id) {
  //console.log("id", menu_item_id);
  for (let i = 0; i < data.length; i++) {
    if (data[i].menu_item_id === parseInt(menu_item_id)) {
      //console.log(data[i]);
      return data[i].quantity;
    }
  }
};
module.exports = { removeItemFromCart, getMenuItemFromCart, getMenuItemCountFromCart };
