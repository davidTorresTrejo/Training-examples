import express, { Request, Response, NextFunction, response } from 'express';


/* Change this method  */

const registerErrorHandlingMiddleware = (server: express.Application) => {

    server.use((error: any, req: Request, res: Response, next: NextFunction) => {
        let status = error.status || 500;
        let messagge = error.messagge || 'something went wrong';

        response
            /* .status(status) */
            .send({status: status, messagge: messagge})
    });
}

export default registerErrorHandlingMiddleware;