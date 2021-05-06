import express from 'express';
import {IRoute} from './routes/index.route';
import config from './ormconfig';
import {ConnectionOptions, createConnection} from 'typeorm';

import registerCommonMiddleware from './middleware/common.middleware';
import registerLoggingMiddlewar from './middleware/logging.middleware';
import registerRouteMiddleware from './middleware/route.middleware';
import registerErrorHandlingMiddleware from './middleware/error.middleware';


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
            return error;
        }

    }


    /*  Middleware -  Methods  */

    private registerMiddleware() {
        registerCommonMiddleware(this.server);
        registerLoggingMiddlewar(this.server);
    }

    private registerRoutes(routes: IRoute[]) {
        registerRouteMiddleware(this.server, routes);
    }

    private registerErrorHandling() {
        registerErrorHandlingMiddleware(this.server);
    }

    listen() {
        this.server.listen(process.env.SERVER_PORT, () => {
            console.log(`Server Running at http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
        });
    }

}


export default Server;