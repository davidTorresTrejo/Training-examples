import express from 'express';
import postRouter from './routes/posts';
import userRouter from './routes/users';

const server = express();
const port = 3000;


/*  Loggin Middleware */
server.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

/* Register Routes */
server.use('/posts', postRouter);
server.use('/users', userRouter);

/* Get Home */
server.get('/', (req, res) => {
    res.send('Welcome!');
});

server.get('/info', (req, res) => {
    res.send('Greetings!');
});

server.listen(port, () => {
    console.log(`Server Running at http://127.0.0.1:${port}`);
});
