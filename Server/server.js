import express from 'express';

const app = express();

app.use(express.json());

const users = []

app.post('/users', (req, res) => {
    users.push(req.body);

    res.status(201).json({ 
        message: 'User created successfully',
        user: req.body
    });
    
});

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