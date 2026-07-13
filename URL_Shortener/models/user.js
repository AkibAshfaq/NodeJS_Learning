const mongoose = require('mongoose');

const userschema = new mongoose.Schema(
    {
        username:{
            type:String,
            required: true,
            unique: true,
        },
        fullname:{
            type:String,
            required: true,
        },
        email:{
            type:String,
            required: true,
            unique: true,
        },
        password:{
            type:String,
            required: true,
        }
    },{
        timstamp: true,
    }
)

const User = mongoose.model('users', userschema);

module.exports = User;