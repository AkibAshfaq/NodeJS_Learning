const { getuser, setuser } = require('../services/auth')

function sessionIdrestriction(req, res, next){
    const savedid = req.headers["authorization"];
    const token = savedid.split("Bearer ")[1];
    console.log(` From auth ${token}`)
    const user =  getuser(token);
    
    if(!savedid) return res.redirect('/user/login')
    if(!user) return res.json({ msg :`From auth return ${token}`})

    req.user = user;
    next();
}

async function CheckAuth(req, res, next){
    const savedid = req.headers["authorization"];
    const token = savedid.split("Bearer ")[1];
    console.log(` From auth ${token}`)
    const user =  getuser(token);
    if(!savedid) return res.redirect('/user/login')
    if(!user) return res.json({ msg :`From auth return ${token}`})

    req.user = user;
    next();
}

module.exports = {
    sessionIdrestriction,
    CheckAuth,
}