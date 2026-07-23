const express = require('express');
const router = express.Router();
const { handleGetloginPage, handleGetsignUpPage, handleLoginCreds, handlesignupCreds, handleDeleteAcclount, handleHome, } = require('../controllers/user');

router.get('/', handleHome)

router.route("/login")
.get(handleGetloginPage)
.post(handleLoginCreds);

router.route("/signup")
.get(handleGetsignUpPage)
.post(handlesignupCreds)

router.delete("/DeleteAccount/:username",handleDeleteAcclount);

module.exports = router;