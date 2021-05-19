import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class LogValidation{

    @IsString({message: `Origin Must be a string`})
    @IsNotEmpty({message: `Origin Must be provided`})
    origin?: string;

    @IsNumber({}, {message: `Status Must be a number`})
    @IsNotEmpty({message: `Status Must be provided`})
    status?: number;

    @IsString({message: `Message Must be a string`})
    @IsNotEmpty({message: `Message Must be provided`})
    message?:string;
}