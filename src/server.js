const http = require('http')
const mongoose = require('mongoose')
const app = require('./routes/index.js')

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  console.log(`Running on port ${server.address().port}`)
})