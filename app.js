const express = require('express');
const routes = require('./routes/site');
const controllerMain = require('./controllers/main');

const app = express();

app.use(routes);
app.use(controllerMain.pageNotFound);

app.listen(4000);