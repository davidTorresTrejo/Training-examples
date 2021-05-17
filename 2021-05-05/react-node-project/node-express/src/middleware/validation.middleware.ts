import { Request, Response, NextFunction } from 'express';
import { validate, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { DataValidationError } from '../shared/error';


/* export const validationMiddleware = (validator: any, option = {}) => {

    return (request: Request, response: Response, next: NextFunction) => {

        validate(plainToClass(validator, request.body), option)
            .then((valerrors: ValidationError[]) => {

                if (valerrors) {
                    //Handle Errors Here
                    const messages = valerrors.map((valerror: ValidationError) => {
                        console.log(`Validation Erros: `, valerror);

                        const constraints: any = valerror.constraints ? valerror.constraints : null;

                        //Deal with nested/children errors (if any)
                        const nestedMessages: any = valerror.children?.map((err: ValidationError) => {
                            const nestedConstraints: any = err.constraints? err.constraints : null;
                            if (nestedConstraints) return Object.values(nestedConstraints);
                        }).join(`, `)

                        if (constraints) {
                            let msg = nestedMessages ? Object.values(constraints) + `, ` + nestedMessages : Object.values(constraints);
                            return msg;
                        } else {
                            return nestedMessages;
                        }
                    }).join(`, `)

                    next(new DataValidationError(messages));

                } else {
                    console.log(`No Erros...`);
                }

            })
            .catch(error => {
                throw error;
            })
    }
}
 */


export const validationMiddleware = ( dto: any ) => {

    return (request: Request, response: Response, next: NextFunction ) => {

        validate(plainToClass(dto, request.body))
            .then((errors: ValidationError[]) => {

                console.log(`List of errors: `, errors);

                if (errors.length){
                    console.log(`Validation Errors : `, errors );

                    /* Handle Errors Here */
                    const messages = errors.map((error: ValidationError ) => {
                        const constraints: any = error.constraints ? error.constraints : null;
                        return Object.values(constraints);
                    }).join(', ')
                    next( new DataValidationError(messages));

                    response.send(errors);
                }else{
                    console.log(` No Validation Errors : `, errors );
                    /* No Errors, handle to next Middlware */
                    next();
                }

            })
    }
}