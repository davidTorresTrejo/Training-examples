import { Request, Response, NextFunction } from 'express';
import { validationMiddleware } from '../middleware/validation.middleware';
import { AuthUserValidation } from '../models/user.validation';
import { IService } from '../services/index.services';
import { handleAsync } from '../shared/utilities';
import { IRoute, Route} from './index.route';

var nJwt = require('njwt');

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

        let [items, error] = await handleAsync(this.service.find(data));

        if (error) return next(error);

        if (items.length) {
            // User Authenticated
            // Create a jwt token and send it along with the response
            const payload = items[0].id;
            const scope = `admin`;
            const claims = {iss: `ejAmerica.com`, sub: payload, scope: scope};
            const token = nJwt.create(claims, `n2ssEMEtE0LB0GxCAbrZw3dlV7o=`);
            token.setExpiration(new Date().getTime() + 60*2000);

            // append token to items
            items.push({token: token.compact()});
            
        }

        response.json(items);
    }

}
export default AuthRoute;