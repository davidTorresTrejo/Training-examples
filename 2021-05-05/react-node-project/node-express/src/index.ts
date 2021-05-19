import 'dotenv/config';
import Server from './server';

import {Route} from './routes/index.route';
import UserRoute from './routes/users.route';
import LogsRoute from './routes/logs.route';
import AuthRoute from './routes/auth.route';

import { Service } from './services/index.services';
import UserService from './services/user.services';
import AuthService from './services/auth.services';

import Post from './models/post.entity';
import Todo from './models/todo.entity';
import User from './models/user.entity';
import Log from './models/log.entity';



/* Create Routes */
const postRoute = new Route().register(`/api/posts`, new Service(Post));
const todoRoute = new Route().register(`/api/todos`, new Service(Todo));
const userRoute = new UserRoute().register(`/api/users`, new UserService(User));
const logRoute = new LogsRoute().register(`/api/logs`, new Service(Log));
const authRoute = new AuthRoute().register(`/api/auth`, new AuthService(User));


/* Initialize server */
const server = new Server(
    [
        postRoute,
        todoRoute,
        userRoute,
        logRoute,
        authRoute
    ]
);


/* Run server */
server.listen();

