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
const formatMenuItems = (data) => {
  //console.log(data);
  for (const item in data) {
    //console.log(data);
    const menuItem = data[item];
    const priceResult = formattedMenuPrice(menuItem);
    menuItem.price = priceResult;
    const imageResult = formattedImageLocation(menuItem);
    menuItem.image_url = imageResult;
  }
  return data;
};

const formatCartItems = (data) => {
  for (let i = 0; i < data.length; i++) {
    const newTotal = data[i].total * data[i].count;
    const priceString = (newTotal / 100).toFixed(2);
    data[i].total = `$${priceString}`;
  }
  return data;
};

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

module.exports = { formatMenuItems, calculateCartTotal, formatCartItems, formattedImageLocation, formattedMenuPrice };

