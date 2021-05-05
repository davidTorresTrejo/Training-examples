import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
class Address{

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    city?: string;
}

export default Address;
