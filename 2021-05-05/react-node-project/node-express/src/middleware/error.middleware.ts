import express, { Request, Response, NextFunction, response } from 'express';


const registerErrorHandlingMiddleware = (server: express.Application) => {

    /* Error handling middleware */
    server.use((error: any, req: Request, res: Response, next: NextFunction) => {
        
        let origin = error.origin;
        let status = error.status || 500;
        let message = error.message || 'something went wrong';

        console.log(`Error Handler: `, origin, status, message);
        

        response
            .status(status)
            .send({status: status, messagge: message})
    });
}

export default registerErrorHandlingMiddleware;