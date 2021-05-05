import express from 'express';
import IRoute from './index.route';

class UsersRoute implements IRoute{
    api = `/api/users`;
    router = express.Router();
}

export default UsersRoute;