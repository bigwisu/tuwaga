'use strict';

const config = require('./config');
const path = require('path');
const express = require('express');
const enrouten = require('express-enrouten');

const app = express();

app.use(enrouten({
  directory: path.join(__dirname, 'controllers')
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const server = app.listen(config.get('PORT'), () => {
  const port = server.address().port;
  console.log(`App listening on port ${port}`);
});

module.exports = app;
