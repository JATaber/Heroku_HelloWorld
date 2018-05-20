const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', require('./routes')(express));

const server = app.listen(app.get('port'), () => {
  console.log('Server active on port: ', port);
});