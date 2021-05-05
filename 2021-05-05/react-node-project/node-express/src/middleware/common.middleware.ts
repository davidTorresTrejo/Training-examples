import express from 'express';
import cors from 'cors';


const registerCommonMiddleware = (server: express.Application) => {

    server.use(express.json());

    /* Set cors headers */
    server.use(cors());
}

export default registerCommonMiddleware;