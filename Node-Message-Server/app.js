const express = require('express');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feed');

const app = express();

app.use(bodyParser.json()); // for application json

app.use((req,res,next) => {
    res.setHeader('Access-Controll-Allow-Origin', '*');
    res.setHeader('Access-Controll-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Controll-Allow-Headers', 'Content-Type, Authorization');
    next();
})



app.use('/feed', feedRoutes);

app.listen('3030');