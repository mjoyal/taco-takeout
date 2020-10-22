//emb-refactor?
const removeItemFromCart = (data) => {
  const priceString = (item.price / 100).toFixed(2);
  const priceDollars = `$${priceString}`;
  return priceDollars;
};
//emb-refactor?
const getMenuItemFromCart = function(data, menu_item_id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].menu_item_id === parseInt(menu_item_id)) {
      return true;
    }
  }
  return false;
};
//emb-refactor?
const getMenuItemCountFromCart = function(data, menu_item_id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].menu_item_id === parseInt(menu_item_id)) {
      return data[i].quantity;
    }
  }
};
module.exports = { removeItemFromCart, getMenuItemFromCart, getMenuItemCountFromCart };
