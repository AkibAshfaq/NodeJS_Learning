const { getuser } = require('../services/auth')


function sessionIdrestriction(req, res, next){
    const savedid = req.cookies.Sid;
    
    if(!savedid) return res.redirect('/login')
    
    const user =  getuser(savedid);

    req.user = user;
    next();
}

module.exports = {
    sessionIdrestriction,
}