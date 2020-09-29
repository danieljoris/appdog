import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Adopter from "./Adopter";
import _Entity from "./Entity";

export enum ContactType {
    LANDLINE_PHONE = 'LANDLINE_PHONE',
    MOBILE_PHONE = 'MOBILE_PHONE'
}

@Entity('phones')
export default class Phone extends _Entity {
    @Column('enum', { enum: ContactType })
    type: ContactType;

    @Column()
    value: string;

    @Column()
    hasWhatsApp: boolean;

    @ManyToOne(type => Adopter, adopter => adopter.phones)
    adopter: Adopter;
}