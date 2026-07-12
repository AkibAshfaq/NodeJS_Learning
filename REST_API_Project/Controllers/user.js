
async function createUser(req, res) {
    
    if (!req.body.first_name || !req.body.last_name || 
        !req.body.email || !req.body.job_title || 
        !req.body.gender) 
    {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    else{

        const result = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        job_title: req.body.job_title,
        gender: req.body.gender,
        });

        return res.status(201).json({ message: 'User created successfully' });
    }
}


async function getUser(req, res) {
    const user = await User.findById(req.params.id);
    return res.json(user);
}

async function updateUser(req, res) {
    await User.findByIdAndUpdate({ _id: req.params.id }, req.body);
    return res.json({ message: 'User updated successfully' });
}

async function deleteUser(req, res) {
    await User.findByIdAndDelete({ _id: req.params.id });
    return res.json({ message: 'User deleted successfully' });
}

async function replaceUser(req, res) {
    await User.findByIdAndUpdate({ _id: req.params.id }, req.body);
    return res.json({ message: 'User replaced successfully' });
}


module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    replaceUser,
};
