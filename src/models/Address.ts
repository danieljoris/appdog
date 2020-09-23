import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import _Entity from './Entity';

export enum AddressType {
    RESIDENTIAL = 'RESIDENTIAL',
    COMMERCIAL = 'COMMERCIAL',
}

@Entity('addresses')
export class Address extends _Entity {
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