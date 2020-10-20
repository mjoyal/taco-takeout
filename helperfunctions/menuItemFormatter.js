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
  for (const item in data) {
    const menuItem = data[item];
    const priceResult = formattedMenuPrice(menuItem);
    menuItem.price = priceResult;
    const imageResult = formattedImageLocation(menuItem);
    menuItem.image_url = imageResult;
  }
  return data;
};

module.exports = { formatMenuItems, formattedImageLocation, formattedMenuPrice };

