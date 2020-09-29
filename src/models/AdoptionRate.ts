import { Column, Entity } from "typeorm";
import _Entity from "./Entity";

export enum AdoptionRateType {
    PAYED = 'PAYED',
    FREE= 'FREE',
}

@Entity('adoptionsRate')
export default class AdoptionRate extends _Entity {

    @Column('enum', { enum: AdoptionRateType })
    type: AdoptionRateType;

    @Column()
    value: number;
}