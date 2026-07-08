
const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json');


const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: false }));

app.get('/users', (req, res) => {
    
    const html= `
        <html>
            <ul>
                ${users.map(user => `<li>${user.first_name} ${user.last_name}</li>`).join('')}
            </ul>
        </html>
    ` 
   return res.send(html);
});

app.route('/api/users').get((req, res) => {
    return res.json(users);
}).post((req, res) => {
    const newuser = req.body;
    users.push({...newuser, id: users.length + 1});
    fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        if (err) return res.status(500).json({ message: 'Error saving user' });
        return res.json(newuser);
    });
});


app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    const html= `
        <html>
            <ul>
                ${user ? `<li>${user.first_name} ${user.last_name}</li>` : '<li>User not found</li>'}
            </ul>
        </html>
    ` 
    return res.send(html);
});

app.route('/api/users/:id').get((req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    return res.json(user);
})
.patch((req, res) => {
    return res.json({ message: 'User updated successfully' });
})
.delete((req, res) => {
    return res.json({ message: 'User deleted successfully' });
}).put((req, res) => {
    return res.json({ message: 'User replaced successfully' });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})


