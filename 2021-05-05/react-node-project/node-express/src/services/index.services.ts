import { getRepository } from 'typeorm';
import { handleAsync } from '../shared/utilities';

interface IService {

    create: (data: any) => Promise<any>;
    find: () => Promise<any>;
    findOne: (id: string) => Promise<any>;
    update: (id: string, data: any) => Promise<any>;
    delete: (id: string) => Promise<any>;
}

class Service implements IService {

    entity: any;

    constructor(entity: any){
        this.entity = entity;
    }

    create = async (data: any) => {

        const newItem = getRepository(this.entity).create(data);
        let [item, error] = await handleAsync(getRepository(this.entity).save(newItem));

        if (error) throw error;
        return item;
    }

    find = async () => {

        let [items, error] = await handleAsync(getRepository(this.entity).find());

        if (error) throw error;
        return items;
    }

    findOne = async (id: string) => {

        let [item, error] = await handleAsync(getRepository(this.entity).findOne(id));

        if (error) throw error;
        return item;
    }

    update = async (id: string, data: any) => {

        let [response, error] = await handleAsync(getRepository(this.entity).update(id, data));
        if (error) throw error;

        let [updatedItem, errorUpdate] = await handleAsync(getRepository(this.entity).findOne(id));
        if (errorUpdate) throw errorUpdate;

        return updatedItem;
    }

    delete = async (id: string) => {

        let [response, error] = await handleAsync(getRepository(this.entity).delete(id));
        if (error) throw error;

        return response;
    }
}


export { IService , Service };