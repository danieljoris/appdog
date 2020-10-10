import { Column, Entity, Generated, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import Adopter from "./Adopter";
import Animal from "./Animal";
import _Entity from "./Entity";
import ResponsibilityStatement from "./ResponsibilityStatement";

@Entity('adoptions')
export default class Adoption extends _Entity {

    @ManyToOne(type => Adopter, adopter => adopter.adoptions)
    adopter: Adopter;

    @OneToOne(type => Animal)
    @JoinColumn()
    animal: Animal;

    @Column()
    adoptionDate: Date;

    @OneToOne(type => ResponsibilityStatement)
    @JoinColumn()
    resposabilityStatement: ResponsibilityStatement;

    @Column()
    donatedBy: string;

    @Column()
    observations: string;

    @Column()
    adoptionFee: number;

    @Generated("uuid")
    uuid: string;
}
