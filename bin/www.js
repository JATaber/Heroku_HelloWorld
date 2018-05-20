const http = require('http')
const mongoose = require('mongoose')
const app = require('../app.js')

app.set('port', process.env.PORT || 3000)

const server = app.listen(app.get('port'), () => {
  console.log(`Express running at PORT ${server.address().port}`)
});