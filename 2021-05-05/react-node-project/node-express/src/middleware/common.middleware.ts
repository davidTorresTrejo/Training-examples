import express from 'express';
import cors from 'cors';
import path from 'path';
import config from '../shared/config';


const registerCommonMiddleware = (server: express.Application) => {

    server.use(express.json());

    /* Set cors headers */
    server.use(cors());


    /* Serve Static Files */
    server.use(express.static(config.get(`react_app_path`)));

    
}

export default registerCommonMiddleware;