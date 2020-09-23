import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import _Entity from "./Entity";

export enum ContactType {
    LANDLINE_PHONE = 'LANDLINE_PHONE',
    MOBILE_PHONE = 'MOBILE_PHONE'
}

Entity('phones')
export class Phone extends _Entity {
    @Column('enum', { enum: ContactType })
    type: ContactType;

    @Column()
    value: string;

    @Column()
    hasWhatsApp: boolean;
}