import { getRepository } from 'typeorm';
import { handleAsync } from '../shared/utilities';
import { Service } from './index.services';
import { AdaptorError } from '../shared/error';


class AuthService extends Service {

    find = async (options: any) => {
        
        let opts = {where: options, relations: ["address", "company"]};
        let [items, error] = [null, null];

        [items, error] = await handleAsync(getRepository(this.entity).find(opts));

        if (error) throw new AdaptorError(error);

        return items;
    }
}

export default AuthService;