import 'dotenv/config';
import Server from './server';

import {Route} from './routes/index.route';
import UserRoute from './routes/users.route';
import { Service } from './services/index.services';
import UserService from './services/user.services';
import Post from './models/post.entity';
import Todo from './models/todo.entity';
import User from './models/user.entity';
import Company from './models/company.entity';



/* Create Routes */
const postRoute = new Route().register(`/api/posts`, new Service(Post));
const todoRoute = new Route().register(`/api/todos`, new Service(Todo));
const userRoute = new UserRoute().register(`/api/users`, new UserService(User));
const companyRoute = new Route().register(`/api/company`, new Service(Company));


/* Initialize server */
const server = new Server(
    [
        postRoute,
        todoRoute,
        userRoute,
        companyRoute
    ]
);


/* Run server */
server.listen();

