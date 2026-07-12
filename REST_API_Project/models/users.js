const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    job_title: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('users', schema);

module.exports = User;