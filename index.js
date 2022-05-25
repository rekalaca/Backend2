const express = require('express');
const port = 4400;
const app = express();
const bodyParser = require('body-parser');
const addRoutes = require('./route');
app.use(bodyParser.json());
addRoutes(app);




app.listen(port, () => {
    console.log(`Fut a ${port} porton!`)
})