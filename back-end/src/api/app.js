const express = require('express');
const cors = require('cors');
const middlewareErrors = require('../database/middlewares/middlwareErrors');
const loginRoutes = require('../database/routes/loginRoutes');
const userRoutes = require('../database/routes/userRoutes');
const productsRoutes = require('../database/routes/productsRouter');
const salesRoutes = require('../database/routes/salesRoutes');
const authToken = require('../database/middlewares/authToken');
const postUserWithToken = require('../database/routes/postUserWithToken');

const app = express();
app.use(express.json());

app.use(cors());
app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/images', express.static('public'));

app.use(loginRoutes);
app.use(userRoutes);
app.use(authToken);
app.use(productsRoutes);
app.use(salesRoutes);
app.use(postUserWithToken);
app.use(middlewareErrors);

module.exports = app;
