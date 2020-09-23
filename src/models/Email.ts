import { Column, Entity } from "typeorm";
import _Entity from "./Entity";

Entity('emails')
export class Email extends _Entity {
    @Column()
    address: string; 

    @Column()
    receiveNewsletter: boolean;
}