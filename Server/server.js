import express from 'express';
import pkg from '@prisma/client';

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const app = express();

app.use(express.json());


app.post('/users', async (req, res) => {
    users.push(req.body);

    await prisma.user.create({
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    })

    res.status(201).json({ 
        message: 'User created successfully',
        user: req.body
    });
    
});

/*
app.get('/users', async (req, res) => {

    const users = await prisma.user.findMany();

    res.send(users);
})
*/

app.get('/users', async (req, res) => {
    let users = []

    if (req.query) {
        users = await prisma.user.findMany({
            where: {
                name: req.query.name
            }
        });
    } else {
        users = await prisma.user.findMany();   
    }

})


app.put('/users/:id', async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    })

    res.status(201).json(req.body);

})


app.delete('/users/:id', async (req, res) => {

    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(204).json();

})


app.listen(3000)


/*

we routers need:

- router type/ w/ params http
- endpoints

-www.servidor.com/api/v1/endpoint

*/