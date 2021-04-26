import express from 'express';

const server = express();
const port = 3000;


/*  Loggin Middleware */
server.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

server.get('/', (req, res) => {
    res.send('Hello world from express');
});

server.get('/info', (req, res) => {
    res.send('Info from express');
});

server.listen(port, () => {
    console.log(`Server Running at http://127.0.0.1:${port}`);
});

