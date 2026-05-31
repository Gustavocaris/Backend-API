import express from 'express';

const app = express();

const users = []

app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.send('User created');
}

app.get('/users', (req, res) => {
    res.send('List of users');
})

app.listen(3000)


/*

we routers need:

- router type/ w/ params http
- endpoints

-www.servidor.com/api/v1/endpoint

*/