const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const api = require('./api');

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: ['json', 'application/csp-report'] }));
app.use('/api', api);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
