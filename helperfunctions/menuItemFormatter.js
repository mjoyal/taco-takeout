const fs = require('fs');
const formatMenuItems = (data) => {
  for (const item in data) {
    let priceInt = data[item].price;
    let priceDollars = (priceInt / 100).toFixed(2);
    data[item].price = `$${priceDollars}`;

    let imageFIle = data[item].image_url;
    console.log(`images/${imageFIle}`);
    //data[item].image_url = `images/${imageFIle}`;
    data[item].image_url = `images/taco1.png`;
  }
  return data;
};
module.exports = { formatMenuItems };

