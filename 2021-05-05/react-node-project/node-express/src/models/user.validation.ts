import { IsDefined, IsEmail, IsNotEmpty, IsNotEmptyObject, IsObject, IsString, Length, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';


class AdrdessValidation{

    @IsDefined({message: `City must be defined`})
    @IsString({message: `City must be string`})
    @IsNotEmpty({message: `City must be provied`})
    city?: string;
}

class CompanyValidation{

    @IsDefined({message: `Name must be defined`})
    @IsString({message: `Name must be string`})
    @IsNotEmpty({message: `Name must be provied`})
    name?: string;
}

class UserValidation{

    @IsDefined({message: `Name must be defined`})
    @IsString({message: `Name must be a string`})
    @IsNotEmpty({message: `Name must be provied`})
    @Length(3, 8, {message: `Name must be between 3 - 8 characters`})
    name?: string;

    @IsDefined({message: `Email must be defined`})
    @IsEmail({}, {message: `Email is Invalid`})
    email?: string;

    @IsDefined({message: `Password must be set`})
    @IsString({message: `Password must be a string`})
    @IsNotEmpty({message: `Password must be provied`})
    password?: string;

    @IsDefined({message: `Phone must be defined`})
    @IsString({message: `Phone must be a string`})
    @IsNotEmpty({message: `Phone must be provied`})
    phone?: string;

    @IsDefined({message: `Address must be defined`})
    @IsObject({message: `Address cannot be empty`})
    @IsNotEmptyObject({}, {message: `Address cannot be empty`})
    @ValidateNested()
    @Type(() => AdrdessValidation)
    address?: AdrdessValidation;

    @IsDefined({message: `Company must be defined`})
    @IsObject({message: `Company cannot be empty`})
    @IsNotEmptyObject({}, {message: `Company cannot be empty`})
    @ValidateNested()
    @Type(() => CompanyValidation)
    company?: CompanyValidation;
}

export default UserValidation;