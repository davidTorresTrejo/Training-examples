import express, { Request, Response, NextFunction, Router, IRouter } from 'express';
import { handleAsync } from '../shared/utilities';
import { IService } from '../services/index.services';
import { IRoute, Route } from './index.route';
import { EntityNotFoundError } from '../shared/error';
import { validationMiddleware } from '../middleware/validation.middleware';
import UserValidation from '../models/user.validation';


/* UserRoute Class */

class UserRoute extends Route {

    /* Register */

    register = (api: string, service: IService): IRoute => {

        this.api = api;
        this.service = service;

        this.router.post('/', validationMiddleware(UserValidation) ,this.post);
        this.router.get('/', this.get);
        this.router.get('/:id', this.getOne);
        this.router.patch('/:id', validationMiddleware(UserValidation, {skipMissingProperties: true}), this.patch);
        this.router.delete('/:id', this.delete);
        return this;
    }

    /* HTTP Methods */

    /* Make a Get */
    protected get = async (request: Request, response: Response, next: NextFunction) => {

        let getOption = request.query.name;

        let [items, error] = await handleAsync(this.service.find(getOption));

        if (error) return next(error);
        response.json(items);
    }

    /* Make a User delete */
    protected delete = async (request: Request, response: Response, next: NextFunction) => {

        const id = request.params.id;

        let [deleteResponse, error] = await handleAsync(this.service.delete(id));

        if (error) return next(error);
        if (deleteResponse.affected === 1) {
            response.json({ deleted: true, messagge: `All users deleted Successfully` });
        } else {
            next(new EntityNotFoundError(id));
        }
    }

}

export default UserRoute;
