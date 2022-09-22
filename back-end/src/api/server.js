const express = require('express');
const app = require('./app');
const middlewareErrors = require('../database/middlewares/middlwareErrors');
const loginRoutes = require('../database/routes/loginRoutes');
const userRoutes = require('../database/routes/userRoutes');

// const port = process.env.PORT || 3001;

app.use(express.json());
app.use(loginRoutes);
app.use(userRoutes);
app.use(middlewareErrors);
