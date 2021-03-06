import { getRepository } from 'typeorm';
import { handleAsync } from '../shared/utilities';
import { Service } from './index.services';


class UserService extends Service {

    find = async (options: any) => {

        /* Query for username */
        let [items, error] = [null, null];
        if (options){
            [items, error] = await handleAsync(
                getRepository(this.entity)
                .createQueryBuilder(`user`)
                .leftJoinAndSelect(`user.address`, `address`)
                .leftJoinAndSelect(`user.company`, `company`)
                .where(`user.name ilike :name`, {name: `%${options}%`})
                .getMany()
            );
        }else{
            [items, error] = await handleAsync(getRepository(this.entity).find({relations: ["address", "company"]}));
        }

        if (error) throw error;
        return items;
    }

    findOne = async (id: string) => {

        let [item, error] = await handleAsync(getRepository(this.entity).findOne(id, {relations: ["address", "company"]}));

        if (error) throw error;
        return item;
    }

    update = async (id: string, data: any) => {

        const modData = {id: Number(id), ...data};

        let [item, error] = await handleAsync(getRepository(this.entity).save(modData));

        if (error) throw error;

        let [itemUpdated, error2] = await handleAsync(getRepository(this.entity).update(id, {relations: ["address", "company"]}));
        if (error2) throw error2;

        return itemUpdated;
    }

}

export default UserService;