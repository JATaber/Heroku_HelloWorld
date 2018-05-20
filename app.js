const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const index = require('./src/routes/index.js');
app.use('/', index);

module.exports = app;