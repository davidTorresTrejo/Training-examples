import { Request, Response, NextFunction, RequestHandler} from 'express';
var nJwt = require('njwt');
import config from '../shared/config'

import { AuthError } from '../shared/error';

export const authMiddleware = (): RequestHandler => {

    return(request: Request, response: Response, next: NextFunction) => {

        //Retreive token from header
        const token = request.header(`AUTH_TOKEN`);

        if (token){
            //Verify token is not tampered
            nJwt.verify(token, config.get(`jwt:secret`),
                (error: any, jwt: any) => {
                    if (error){
                        next( new AuthError(error.message));
                    }else{
                        // jwt token is invalid
                        next();
                    }
                }
            );
        }else{
            next( new AuthError(`UnAuthorized Access!`));
        }

    }
}