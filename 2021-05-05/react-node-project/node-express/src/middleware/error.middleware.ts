import {Request, Response, NextFunction, response} from 'express';


const registerErrorHandlingMiddleware = (error: any, req: Request, res: Response, next: NextFunction) => {
    
    let status = error.status || 500;
    let messagge = error.messagge || 'something went wrong';

    response
        .status(status)
        .send(messagge)
}

export default registerErrorHandlingMiddleware;