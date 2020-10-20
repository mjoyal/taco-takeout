module.exports = (router /*, helpers*/, db) => {
  router.get('/', (req, res) => {
    res.render('checkout');
  });
};
