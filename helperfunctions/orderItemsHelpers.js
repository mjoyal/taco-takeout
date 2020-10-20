const addItemToCart = (data, menu_item_id) => {
  //console.log(Array.isArray(data));
  // result = [];
  // for (let i = 0; i < data.length; i++) {
  //   const currQ = data[i].quantity;
  //   if (data[i].menu_item_id == menu_item_id) {

  //   }
  //   result.push({
  //     id: data[i].id,
  //     order_id: data[i].order_id,
  //     menu_item_id: data[i].menu_item_id,
  //     quantity: data[i].quantity
  //   });
  // }
  // result.push({
  //   id: 1,
  //   order_id: 1,
  //   menu_item_id: 4,
  //   quantity: 1
  // });
  // console.log(result);
};
const removeItemFromCart = (data) => {
  const priceString = (item.price / 100).toFixed(2);
  const priceDollars = `$${priceString}`;
  return priceDollars;
};
const getMenuItemFromCart = function(data, menu_item_id) {
  //console.log(menu_item_id);
  for (let i = 0; i < data.length; i++) {
    if (data[i].menu_item_id === parseInt(menu_item_id)) {
      //console.log(data[i].menu_item_id);
      return data[i].id;
    }
  }
  //return false;
};
module.exports = { removeItemFromCart, addItemToCart, getMenuItemFromCart };
