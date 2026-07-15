const { getuser, setuser } = require('../services/auth')

function sessionIdrestriction(req, res, next){
    const savedid = req.header['authorization'];
    
    if(!savedid) return res.redirect('login')
    
    const token = savedid.split('Bearer')[1];
    const user =  getuser(token);

    if(!user) return res.redirect('login')

    req.user = user;
    next();
}

async function CheckAuth(req, res, next){
    const Cookie = req.cookies?.Sid;

    if(!Cookie) return res.redirect("login");
    const user = getuser(Cookie);

    req.user = user;
    next();
}

module.exports = {
    sessionIdrestriction,
    CheckAuth,
}