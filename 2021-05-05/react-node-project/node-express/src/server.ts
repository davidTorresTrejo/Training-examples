import express from 'express';
import {IRoute} from './routes/index.route';
import config from './ormconfig';
import {ConnectionOptions, createConnection} from 'typeorm';

import registerCommonMiddleware from './middleware/common.middleware';
import registerLoggingMiddlewar from './middleware/logging.middleware';
import registerResponseMiddleware from './middleware/response.middleware';
import { registerRouteMiddleware, registerUnhandledRoutesMiddleware } from './middleware/route.middleware';
import registerErrorHandlingMiddleware from './middleware/error.middleware';
import {PersistanceConnectivityError} from './shared/error';


class Server {

    private server: express.Application;

    constructor(routes: IRoute[]) {
        
        this.server = express();

        this.registerMiddleware();
        this.registerRoutes(routes);
        this.registerErrorHandling();
        this.connectToPersistance();
    }

    /* Connect To Database */
    private async connectToPersistance() {
        try {
            await createConnection(config);
            console.log(`Persistance layer Connected...`);
        } catch (error) {
            console.log(`Persistance layer Connection Failded: `, error);
            return new PersistanceConnectivityError(error);
        }
    }


    /*  Middleware -  Methods  */
    private registerMiddleware() {
        registerCommonMiddleware(this.server);
        registerLoggingMiddlewar(this.server);
        registerResponseMiddleware(this.server);
    }

    private registerRoutes(routes: IRoute[]) {
        registerRouteMiddleware(this.server, routes);
    }

    private registerErrorHandling() {
        registerUnhandledRoutesMiddleware(this.server);
        registerErrorHandlingMiddleware(this.server);
    }

    listen() {
        this.server.listen(process.env.SERVER_PORT, () => {
            console.log(`Server Running at http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
        });
    }

}


export default Server;