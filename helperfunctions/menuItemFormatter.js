const formatMenuItems = (data) => {
  for (const item in data) {
    let priceInt = data[item].price;

    let priceDollars = (priceInt / 100).toFixed(2);
    data[item].price = `$${priceDollars}`;

    let imageFIle = data[item].image_url;
  }
  return data;
};
module.exports = { formatMenuItems };


