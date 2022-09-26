const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/images', express.static('public'));


module.exports = app;
