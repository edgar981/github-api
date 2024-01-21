const express = require('express');

const reposRouter = require('./routes/reposRoutes'); 

const app = express();

app.use('/api/repositories', reposRouter);

module.exports = app;