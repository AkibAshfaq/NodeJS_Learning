const User = require('../models/user');

async function handleGetloginPage(req, res) {
    return res.render("login");
}

async function handleLoginCreds(req, res) {
    const { username, password} = req.body;

    try{
        const logincreds= await User.findOne({username, password})
        if(!logincreds) return res.status(404).json({msg:"user not found"})
        return res.redirect("/user/home");
    }catch(err){
        return res.status(400).json({msg:"Login issue"})
        return res.render("login");
    }

}

async function handleHome(req, res) {
    return res.render("home");
}

async function handleGetsignUpPage(req, res) {
    return res.render("signup");
}


async function handlesignupCreds(req, res) {
    const postbody = req.body;

    if(!req.body.username || !req.body.name || !req.body.email) 
        return res.status(400).json({ Messege : "All field must be filled"});
    
    const newuser = await User.create(
        {
            username: req.body.username,
            fullname: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }
    )
        
    return res.render("signup", {
        status: "User Created"
    }); 
}

async function handleDeleteAcclount(req, res){
    const username = req.params.username;
    try{
        await User.deleteOne({username});
        return res.status(200).json({msg:"User Deleterd Sucessfully"});
    }catch(err){
        return res.status(400).json({msg:"User deletation failed" + err});
    }
}



module.exports = {
    handleGetloginPage,
    handleGetsignUpPage,
    handleLoginCreds,
    handlesignupCreds,
    handleDeleteAcclount,
    handleHome,
}