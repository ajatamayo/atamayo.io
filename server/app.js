const express = require('express');
const app = express();
const api = require('./api');

const port = process.env.PORT || 5000;

app.use('/api', api);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
