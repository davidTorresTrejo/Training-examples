import express from 'express';
import IRoute from './index.route';

class PostsRoute implements IRoute{
    api = `/api/posts`;
    router = express.Router();

}

export default PostsRoute;
