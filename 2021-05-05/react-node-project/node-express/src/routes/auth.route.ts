import { Request, Response, NextFunction } from 'express';
import { validationMiddleware } from '../middleware/validation.middleware';
import { AuthUserValidation } from '../models/user.validation';
import { IService } from '../services/index.services';
import { handleAsync } from '../shared/utilities';
import { IRoute, Route} from './index.route';


class AuthRoute extends Route {

    register = ( api: string, service: IService ): IRoute => {

        this.api = api;
        this.service = service;

        /* Only we need post to send data for authentication */
        this.router.post(`/`, validationMiddleware(AuthUserValidation), this.post);
        return this;
    }

    protected post = async (request: Request, response: Response, next: NextFunction) => {
        const data = request.body;

        let [newItem, error] = await handleAsync(this.service.find({where: data}));

        if (error) return next(error);
        response.json(newItem);
    }

}
export default AuthRoute;