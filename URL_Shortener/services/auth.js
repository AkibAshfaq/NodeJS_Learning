// const sessionidtouser = new Map();
const jwt = require('jsonwebtoken');
const secret = "TestSecret"

// function setuser(id, name){
//     sessionidtouser.set(id, name);
// }

function setuser(user){
    const payload = { _id: user._id };
    return jwt.sign(payload, secret);
}

// function getuser(id){
//     return sessionidtouser.get(id);
// }

function getuser(token){
    if(!token) return null;
    return jwt.verify(token, secret);
}

module.exports = {
    setuser,
    getuser,
}