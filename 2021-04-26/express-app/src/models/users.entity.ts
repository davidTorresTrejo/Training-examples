import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
class Users{

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name?: string;

    @Column({unique: true})
    email?: string;

    @Column()
    password?: string;

    @Column()
    phone?: string;
}

export default Users;
