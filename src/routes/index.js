const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('Hello from Heroku!!');
})

module.exports = router;