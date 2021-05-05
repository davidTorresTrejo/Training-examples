import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
class Company{

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name?: string;
}

export default Company;
