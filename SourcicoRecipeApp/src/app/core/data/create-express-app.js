const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRouter = require('./api-router');

function createExpressApp(database) {
  const app = express();

  app.use(express.static(path.join(__dirname, 'public')));
  app.use(bodyParser.json());
  app.use('/api', apiRouter(database));

  return app;
}

module.exports = createExpressApp;
