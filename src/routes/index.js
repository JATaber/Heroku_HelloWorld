const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('<h1>Hello from Heroku!</h1>');
});

module.exports = router;