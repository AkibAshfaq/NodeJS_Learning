
const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose')
const { connectToDatabase } = require('./Connection');
const { logRequest } = require('./middlewares');
const userRouter = require('./routers/user');


const app = express();
const port = 3000;

//Connection to MongoDB
connectToDatabase('mongodb://localhost:27017/mydatabase');

app.use(express.urlencoded({ extended: false }));

app.use(logRequest('log.txt'));

app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});