import express, { request, Request, Response, NextFunction } from 'express';
import {IRoute} from '../routes/index.route';
import path from 'path';

const registerRouteMiddleware = (server: express.Application, routes: IRoute[]) => {
    routes.forEach( (route: IRoute) => {
        server.use(route.api, route.router);
    });
}

const registerUnhandledRoutesMiddleware = ( server: express.Application) => {
    
    /* Handle Unhandle Get request and return React - app */
    server.get('⋆', (request: Request, response: Response) => {
        response.sendFile(path.resolve(__dirname, `../../../react-app/build/`, `index.html`));
    });

    /* Handle Unhandled API request */
    server.use( (reques: Request, response: Response, next: NextFunction ) => {
        response.send(`API ${request.path} Not implemented!`);
    });
}

export { registerRouteMiddleware, registerUnhandledRoutesMiddleware };