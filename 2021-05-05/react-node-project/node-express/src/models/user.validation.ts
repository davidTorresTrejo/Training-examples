import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsObject, IsString, Length, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';


class AdrdessValidation{

    /* @IsDefined({message: `City must be defined`}) */
    @IsString({message: `City must be string`})
    @IsNotEmpty({message: `City must be provided`})
    city?: string;
}

class CompanyValidation{

    /* @IsDefined({message: `Company Name must be defined`}) */
    @IsString({message: `Company Name must be string`})
    @IsNotEmpty({message: `Company Name must be provided`})
    name?: string;
}

class UserValidation{

    /* @IsDefined({message: `Name must be defined`}) */
    @IsString({message: `Name must be a string`})
    @IsNotEmpty({message: `Name must be provided`})
    name?: string;

    /* @IsDefined({message: `Email must be defined`}) */
    @IsEmail({}, {message: `Email is Invalid`})
    email?: string;

    /* @IsDefined({message: `Password must be set`}) */
    @IsString({message: `Password must be a string`})
    @Length(3, 8, {message: `Password must be between 3 - 8 characters`})
    password?: string;

    /* @IsDefined({message: `Phone must be defined`}) */
    @IsString({message: `Phone must be a string`})
    @IsNotEmpty({message: `Phone must be provided`})
    phone?: string;

    /* @IsDefined({message: `Address must be defined`}) */
    @IsNotEmptyObject({}, {message: `Address cannot be empty`})
    @ValidateNested()
    @Type(() => AdrdessValidation)
    address?: AdrdessValidation;

    /* @IsDefined({message: `Company must be defined`}) */
    @IsNotEmptyObject({}, {message: `Company cannot be empty`})
    @ValidateNested()
    @Type(() => CompanyValidation)
    company?: CompanyValidation;
}

export default UserValidation;


/* Class For Authentication */

export class AuthUserValidation{

    @IsEmail({}, {message: `Email is invalid`})
    email?: string;

    @IsString({message: `Password must be a string`})
    @Length(3, 8, {message: `Password must be beetwen : 3 - 8 characters`})
    password?: string;
}