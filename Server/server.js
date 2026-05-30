import express from 'express';

const app = express();

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