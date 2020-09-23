import { Column, Entity, Generated } from "typeorm";
import { Adopter } from "./Adopter";
import { Animal } from "./Animal";
import _Entity from "./Entity";
import { ResponsibilityStatement } from "./ResponsibilityStatement";

@Entity('adoptions')
export class Adoption extends _Entity {
    
    @Column()
    adopter: Adopter;

    @Column()
    Animal: Animal;

    @Column()
    adoptionDate: Date;

    @Column()
    resposabilityStatement: ResponsibilityStatement;

    @Column()
    donatedBy: string;

    @Column()
    observations: string;

    @Generated("uuid")
    uuid: string;
}
