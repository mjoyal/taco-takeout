// Converts Menu Item price from cents to formatted price
const formattedMenuPrice = (item) => {
  const priceString = (item.price / 100).toFixed(2);
  const priceDollars = `$${priceString}`;
  return priceDollars;
};

// Paths images to public folder
const formattedImageLocation = (item) => {
  const imageLocationString = `images/${item.image_url}`;
  return imageLocationString;
};

//Processes Menuitem result data though Menu price formatter and image location formatter
//emb-refactor?
const formatMenuItems = (data) => {
  for (const item in data) {
    const menuItem = data[item];
    const priceResult = formattedMenuPrice(menuItem);
    menuItem.price = priceResult;
    const imageResult = formattedImageLocation(menuItem);
    menuItem.image_url = imageResult;
  }
  return data;
};

//emb-refactor?
const formatCartItems = (data) => {
  for (let i = 0; i < data.length; i++) {
    const newTotal = data[i].total * data[i].count;
    const priceString = (newTotal / 100).toFixed(2);
    data[i].total = `$${priceString}`;
  }
  return data;
};
//emb-refactor?
const calculateCartTotal = (items) => {
  let result = 0;
  const cartItemsArray = (items[2]);
  for (let i = 0; i < cartItemsArray.length; i++) {
    const moneystring = cartItemsArray[i].total;
    let cleanString = moneystring.replace('$', '');
    cleanString = cleanString.replace('.', '');
    result = result + parseInt(cleanString);
  }
  const priceString = (result / 100).toFixed(2);
  const priceDollars = `$${priceString}`;
  return priceDollars;
};


const total = function (prices) {
  let totalPrice = 0;
  for (const price of prices) {
    totalPrice += price;
  }
  return formattedMenuPrice({'price': totalPrice});
};

const makeOrder = function (database, order_ids) {
  const orders = {};
  for (const id of order_ids) {
    orders[id] = { items: "", total: "" };
    orders[id].items = [];
    const prices = [];
    for (const data of database) {
      if (data.order_id === id) {
        data.price = data.price * data.quantity;
        prices.push(data.price);
        price = formattedMenuPrice(data);
        const order = {
          name: data.name,
          price: price,
          quantity: data.quantity
        };
        orders[id]["items"].push(order);
      }

    }
   orders[id].total = total(prices);
  }
  return orders;
};

const findIds = function (database) {
  const orderIds = [];
  for (const data of database) {
    if (!orderIds.includes(data.order_id)) {
      orderIds.push(data.order_id);
    }
  }
  return makeOrder(database, orderIds);
};

module.exports = { formatMenuItems, calculateCartTotal, formatCartItems, formattedImageLocation, formattedMenuPrice, findIds};

