import { Column, Entity } from "typeorm";
import _Entity from "./Entity";

@Entity('responsibilityStatements')
export default class ResponsibilityStatement extends _Entity {
    @Column()
    statement: string;
}