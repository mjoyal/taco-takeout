module.exports = (router /*, helpers*/) => {
  router.get('/', (req, res) => {
    res.render('admin');
  });
  router.post('/', (req, res) => {
    const minutes = req.body.waitTime;
    console.log(minutes); 
    const templateVars = {time: minutes}
  });
};
