const mongoose = require('mongoose')

async function connectToDatabase(url) {
    mongoose.connect(url).then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });
}

module.exports = {
    connectToDatabase,
    };