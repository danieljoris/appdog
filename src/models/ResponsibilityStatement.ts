import { Column, Entity } from "typeorm";
import _Entity from "./Entity";

Entity('responsibilityStatements')
export class ResponsibilityStatement extends _Entity {
    @Column()
    text: string;
}