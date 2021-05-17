import { Request, Response, NextFunction, request } from 'express';
import { validate, ValidationError} from 'class-validator';
import { plainToClass, plainToClassFromExist} from 'class-transformer';
import { DataValidationError } from '../shared/error';


export const validationMiddleware = ( dto: any ) => {

    return (request: Request, response: Response, next: NextFunction ) => {

        validate(plainToClassFromExist(dto, request.body))
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
