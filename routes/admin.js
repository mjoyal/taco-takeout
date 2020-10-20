const makeOrder = function (database, order_ids) {
  const orders = {};
  for (const id of order_ids) {

    orders[id] = [];
    for (const data of database) {
      if (data.order_id === id) {
        orders[id].push(data.name);
      }
    }
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

module.exports = (router, helpers, db) => {

  router.get('/', (req, res) => {
    return db.query(`
    SELECT orders.id as order_id, menu_items.name
    FROM orders
    JOIN order_menu_items ON orders.id = order_id
    JOIN menu_items ON menu_item_id = menu_items.id
    WHERE order_started_at IS NULL;
    `,)
      .then(data => {
        const reformatedData = findIds(data.rows);
        console.log(reformatedData);
        console.log({orders: reformatedData});
        res.render('admin', {orders: reformatedData});
        return data.rows;
      })
      .catch(e => {
        res.send(e);
      });
  });


  // router.post('/', (req, res) => {
  //   const minutes = req.body.waitTime;
  //   const templateVars = {time: minutes}
  // });

};
