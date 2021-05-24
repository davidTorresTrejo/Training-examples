import { validate, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';

export const dataValidation = (validator: any, data: any, option = {}) => {
    return validate( plainToClass(validator, data, option) )
        .then( (valerrors: ValidationError[]) => {

            if (valerrors.length){
                // Handle Errors Here
                const messages = valerrors.map( (valerror: ValidationError) => {
                    const constraints: any = valerror.constraints ? valerror.constraints : null;
                    return Object.values(constraints);
                }).join(`, `);
                return Promise.resolve(messages);
            }else{
                return Promise.resolve(null);
            }
        })
}