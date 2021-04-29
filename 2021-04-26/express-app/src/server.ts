import express from 'express';
import postRouter from './routes/posts';
import userRouter from './routes/users';
import cors from 'cors';
/* Read enviroment variables */
import 'dotenv/config';
import {ConnectionOptions, createConnection} from 'typeorm';
import config from './ormconfig';


const server = express();
/* const port = 3500; */
const port = process.env.SERVER_PORT;


/* Connect To Database */
async function connectToPersistance(){
    try{
        await createConnection(config);
        console.log(`Persistance layer Connected...`);
    }catch(error){
        console.log(`Persistance layer Connection Failded: `, error);
        return error;
    }
    
}

server.use(express.urlencoded());
server.use(express.json());

/* Call function */
connectToPersistance();


/* Set cors headers */

server.use(cors());

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

/* Error handling */
server.use((error: any, req: any, res: any, next: any) => {
    console.log(`Unhandled Error: `, error);
    res.send(`Unhandled Error, Please Try Again`);
});

server.listen(port, () => {
    console.log(`Server Running at http://127.0.0.1:${port}`);
});


/* 
    install cors - npm i cors - @types/cors 
    import cors from 'cors'

    2021-04-29
    install typeorm

*/