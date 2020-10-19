module.exports = (router /*, helpers*/) => {
  router.get('/', (req, res) => {
    res.render('order-confirmed');
  });
};
