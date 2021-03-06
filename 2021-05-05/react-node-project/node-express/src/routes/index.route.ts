import express, { Request, Response, NextFunction, Router } from 'express';
import { handleAsync } from '../shared/utilities';
import { IService } from '../services/index.services';
import { EntityNotFoundError } from '../shared/error';


interface IRoute {
    api: string;
    router: Router;
}

/* Base Class */

class Route implements IRoute {

    api!: string;
    router: Router = express.Router();
    protected service!: IService;

    /* Register */

    register = (api: string, service: IService): IRoute => {

        this.api = api;
        this.service = service;

        this.router.post('/', this.post);
        this.router.get('/', this.get);
        this.router.get('/:id', this.getOne);
        this.router.patch('/:id', this.patch);
        this.router.delete('/:id', this.delete);
        return this;
    }


    /* HTTP Methods */

    /* Create a Post */
    protected post = async (request: Request, response: Response, next: NextFunction) => {

        const data = request.body;
        let [newItem, error] = await handleAsync(this.service.create(data));

        if (error) return next(error);
        response.json(newItem);
    }

    /* Make a Get */
    protected get = async (request: Request, response: Response, next: NextFunction) => {

        let getOption = null;

        let [items, error] = await handleAsync(this.service.find(getOption));

        if (error) return next(error);
        response.json(items);
    }

    /* Make a GetOne */
    protected getOne = async (request: Request, response: Response, next: NextFunction) => {

        const id = request.params.id;
        let [item, error] = await handleAsync(this.service.findOne(id));

        if (error) return next(error);

        if (item) {
            response.json(item);
        } else {
            next(new EntityNotFoundError(id));
        }

    }

    /* Make a Update */
    protected patch = async (request: Request, response: Response, next: NextFunction) => {

        const data = request.body;
        const id = request.params.id;

        let [updatedItem, error] = await handleAsync(this.service.update(id, data));

        if (error) return next(error);

        if (updatedItem) {
            response.json(updatedItem);
        } else {
            next(new EntityNotFoundError(id));
        }
    }

    /* Make a delete */

    protected delete = async (request: Request, response: Response, next: NextFunction) => {

        const id = request.params.id;

        let [deleteResponse, error] = await handleAsync(this.service.delete(id));

        if (error) return next(error);

        if (deleteResponse.affected === 1) {
            response.json({ deleted: true });
        } else {
            next(new EntityNotFoundError(id));
        }
    }

}

export { IRoute, Route };

/* Only I need this */