const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const api = require('./api');

const app = express();

const { port } = config.app;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: ['json', 'application/csp-report'] }));
app.use('/api', api);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App listening on port ${port}!`));
