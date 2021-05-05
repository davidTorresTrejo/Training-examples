import express from 'express';
import IRoute from './routes/index.route';

import registerCommonMiddleware from './middleware/common.middleware';
import registerLoggingMiddlewar from './middleware/logging.middleware';
import registerRouteMiddleware from './middleware/route.middleware';
import registerErrorHandlingMiddleware from './middleware/error.middleware';


class Server{
    
    private server: express.Application;

    constructor(routes: IRoute[]){
        this.server = express();

        this.registerMiddleware();
        this.registerRoutes(routes);
        this.registerErrorHandling();

    }


    /*  Methods  */

    private registerMiddleware(){
        registerCommonMiddleware(this.server);
        registerLoggingMiddlewar(this.server);
    }

    private registerRoutes(routes: IRoute[]){
        registerRouteMiddleware(this.server, routes);
    }

    private registerErrorHandling(){
        this.server.use(registerErrorHandlingMiddleware);
    }

    listen(){
        this.server.listen(process.env.SERVER_PORT, () => {
            console.log(`Server Running at http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
        });
    }

}


export default Server;