const express = require('express');
const router = express.Router();
const User = require('../models/users');
const { createUser, getUser, updateUser, deleteUser, replaceUser } = require('../Controllers/user');


router.route('/').get((req, res) => {
    return res.json(users);
}).post(createUser);

router.route('/:id')
.get(getUser)
.patch(updateUser)
.delete(deleteUser)
.put(replaceUser);

module.exports = router;