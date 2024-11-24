const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const config = require('./config');
const api = require('./api');

const app = express();

const { port } = config.app;

app.use(function(req,res,next){setTimeout(next, 1000)});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: ['json', 'application/csp-report'] }));
app.use(morgan('dev'));
app.use('/api', api);

/* eslint-disable no-console */
app.listen(port, () => console.log(`App listening on port ${port}!`));

mongoose
  .connect(config.db.uri)
  .then(() => {
    console.log(`Connected to Mongodb`);
  })
  .catch((err) => {
    console.log(`ERROR connecting to Mongodb`);
    console.log(`ERROR: ${err}`);
  });
/* eslint-enable no-console */
