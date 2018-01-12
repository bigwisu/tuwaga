'use strict';

const config = require('../../config');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require("swagger-ui-express");
const basicAuths = require('basic-auth');

module.exports = (router) => {

  const basicAuth = function() {
    return function(req, res, next) {
      let user = basicAuths(req);

      if (!user || user.name !== config.get('DOCS_USER') || user.pass !== config.get('DOCS_PASSWORD')) {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        return res.sendStatus(401);
      }

      next();
    };
  };

  let showExplorer = false;
  let options = {};

  const swaggerSpec = swaggerJSDoc({
    swaggerDefinition: {
      info: {
        title: config.get('DOCS_TITLE'),
        version: config.get('DOCS_VERSION')
      },
    },
    apis: [
      './controllers/api/sample.js'
    ]
  });

  let customCss = '';
  let customfavIcon = '';
  let swaggerUrl = '';

  router.use(
    '/docs',
    basicAuth(),
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, showExplorer, options, customCss, customfavIcon, swaggerUrl, config.get('DOCS_TITLE')),
    (req, res, next) => {
      next();
    });

};
