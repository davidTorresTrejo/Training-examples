import express, { request, Request, Response, NextFunction } from 'express';
import {IRoute} from '../routes/index.route';
import path from 'path';
import {APINotImplementedError} from '../shared/error';

const registerRouteMiddleware = (server: express.Application, routes: IRoute[]) => {
    
    /* Register API routes */
    routes.forEach( (route: IRoute) => {
        server.use(route.api, route.router);
    });
}

const registerUnhandledRoutesMiddleware = ( server: express.Application) => {
    
    /* All API request not handled before */
    server.all(`/api/⋆`, (request: Request, response: Response) => {
        /* response.send(`API ${request.path} Not Implemented!`); */
        throw new APINotImplementedError(request.path);
    });

    /* Handle Get requests (Non-API) will return React - app */
    server.get('⋆', (request: Request, response: Response) => {
        response.sendFile(path.resolve(__dirname, `../../../react-app/build/`, `index.html`));
    });

    /* Handle Unhandled API request */
    server.use( (reques: Request, response: Response, next: NextFunction ) => {
        /* response.send(`Route ${request.path} Not implemented!`); */
        throw new APINotImplementedError(reques.path);
    });
}

export { registerRouteMiddleware, registerUnhandledRoutesMiddleware };