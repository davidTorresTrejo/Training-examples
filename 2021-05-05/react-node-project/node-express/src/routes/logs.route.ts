import { validationMiddleware } from '../middleware/validation.middleware';
import { IService } from '../services/index.services';
import { IRoute, Route} from './index.route';
import { LogValidation } from '../models/log.validation';


class LogsRoute extends Route {

    register = ( api: string, service: IService ): IRoute => {

        this.api = api;
        this.service = service;

        this.router.post(`/`, validationMiddleware(LogValidation), this.post);
        this.router.get(`/`, this.get);
        this.router.get(`/:id`, this.getOne);
        return this;
    }

}

export default LogsRoute;