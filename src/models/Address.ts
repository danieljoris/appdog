import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Adopter from './Adopter';

import _Entity from './Entity';

export enum AddressType {
    RESIDENTIAL = 'RESIDENTIAL',
    COMMERCIAL = 'COMMERCIAL',
}

@Entity('adresses')
export default class Address extends _Entity {
    
    @ManyToOne(type => Adopter, adopter => adopter.adresses)
    adopter: Adopter;

    @Column('enum', { enum: AddressType })
    type: AddressType;

    @Column()
    street: string;

    @Column()
    number: string;

    @Column()
    neighborhood: string;

    @Column()
    complement: string;

    @Column()
    city: string;

    @Column()
    state: string;
}