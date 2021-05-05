import 'dotenv/config';
import Server from './server';
import PostsRoute from './routes/posts.route';
import UsersRoute from './routes/users.route';


const server = new Server(
    [
        new PostsRoute(),
        new UsersRoute()
    ]
);

server.listen();
