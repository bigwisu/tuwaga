'use strict';

const nconf = require('nconf');
const path = require('path');

nconf
  .argv()
  .env([
    'DOCS_USER',
    'DOCS_PASSWORD',
    'NODE_ENV',
    'PORT'
  ])
  // Config file
  .file({ file: path.join(__dirname, 'config.json') })
  .defaults({
    PORT: 3000
  });

module.exports = nconf;
