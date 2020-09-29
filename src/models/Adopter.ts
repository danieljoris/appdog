import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Address from './Address';
import Adoption from './Adoption';
import Email from './Email';
import _Entity from './Entity';
import Phone from './Phone';

@Entity('adopters')
export default class Adopter extends _Entity {
    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    rg: string;

    @OneToMany(type => Adoption, adoption => adoption.adopter)
    adoptions: Adoption[];

    @OneToMany(type => Address, address => address.adopter)
    adresses: Address[];

    @OneToMany(type => Phone, phone => phone.adopter)
    phones: Phone[];

    @OneToMany(type => Email, email => email.adopter)
    emails: Email[];

}
