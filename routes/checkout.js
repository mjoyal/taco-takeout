module.exports = (router /*, helpers*/, db) => {
  router.get('/:id', (req, res) => {
    res.render('checkout');
  });
};
