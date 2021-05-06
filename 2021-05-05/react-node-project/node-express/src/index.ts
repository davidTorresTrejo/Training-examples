import 'dotenv/config';
import Server from './server';

import {Route} from './routes/index.route';
import { Service } from './services/index.services';
import Post from './models/post.entity';
import Todo from './models/todo.entity';


/* Create Routes */
const postRoute = new Route().register(`/posts`, new Service(Post));
const todoRoute = new Route().register(`/todos`, new Service(Todo));


/* Initialize server */
const server = new Server(
    [
        postRoute,
        todoRoute
    ]
);


/* Run server */
server.listen();

