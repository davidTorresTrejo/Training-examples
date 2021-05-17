import { IsEmail, IsObject, IsString, Length } from 'class-validator';
import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from 'typeorm';

class UserValidation{

    @IsString()
    @Length(3, 8)
    name?: string;

    @IsEmail()
    email?: string;

    @IsString()
    password?: string;

    @IsString()
    @Length(5, 10)
    phone?: string;

    @IsObject()
    address?: string;

    @IsObject()
    company?: string;
}

export default UserValidation;