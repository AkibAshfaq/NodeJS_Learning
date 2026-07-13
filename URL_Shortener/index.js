
const mongoose = require('mongoose');
const path = require('path')
const urlrouter = require('./routers/url');
const userrouter = require('./routers/user')
const { Connectiontodatabase } = require('./connection')
const express = require('express');

const app = express();
const PORT = 3000;

Connectiontodatabase('mongodb://127.0.0.1:27017/ShortUrlDatabase');

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json())
app.use(express.urlencoded({extended : false}));

app.use('/url', urlrouter);
app.use('/user', userrouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

