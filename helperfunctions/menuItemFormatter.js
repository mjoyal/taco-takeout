const formatMenuItems = (data) => {
  for (const item in data) {
    let priceInt = data[item].price;
    let priceDollars = (priceInt / 100).toFixed(2);
    data[item].price = `$${priceDollars}`;
  }
  return data;
};
module.exports = { formatMenuItems };


