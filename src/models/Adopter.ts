import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Address, AddressType } from './Address';
import { Email } from './Email';
import _Entity from './Entity';
import { Phone } from './Phone';

@Entity('adopters')
export class Adopter extends _Entity {
    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    rg: string;

    @ManyToOne(type => Address)
    adresses: Address[];

    @Column()
    phones: Phone[];

    @Column()
    emails: Email[];

}
