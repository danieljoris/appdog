import { Column, Entity, ManyToOne } from "typeorm";
import Adopter from "./Adopter";
import _Entity from "./Entity";

@Entity('emails')
export default class Email extends _Entity {
    @Column()
    address: string; 

    @Column()
    receiveNewsletter: boolean;

    @ManyToOne(type => Adopter, adopter => adopter.emails)
    adopter: Adopter;
}