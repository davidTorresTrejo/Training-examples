import express from 'express';

const registerLoggingMiddleware = (server: express.Application) => {
    server.use((req, res, next) => {
        console.log(`${req.method} ${req.path}`);
        next();
    });
}

export default registerLoggingMiddleware;