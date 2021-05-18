import { Request, Response, NextFunction, RequestHandler } from 'express';
import { validate, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { DataValidationError } from '../shared/error';


export const validationMiddleware = (validator: any, option = {}): RequestHandler => {

    return (request: Request, response: Response, next: NextFunction) => {

        validate(plainToClass(validator, request.body), option)
            .then((valerrors: ValidationError[]) => {

                if (valerrors.length) {
                    // Handle Errors Here
                    const messages = valerrors.map((valerror: ValidationError) => {
                        console.log(`Main Validation Error: `, valerror);
                        const constraints = valerror.constraints ? valerror.constraints : null;

                        // Deal with nested/ children errors  (if any)
                        const nestedMessages = valerror.children?.map((err: ValidationError) => {
                            console.log(`Nested Validation Error: `, err);
                            const nestedConstraints: any = err.constraints ? err.constraints : null;

                            if (nestedConstraints) return Object.values(nestedConstraints).join(`, `);
                        });

                        if (nestedMessages?.length) return nestedMessages;

                        if (constraints) return Object.values(constraints);

                    }).join(`, `);
                    
                    next( new DataValidationError(messages));

                } else {
                    next( );
                }
            })
            .catch(error => {
                throw error;
            })
    }
}