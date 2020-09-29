import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

import _Entity from './Entity';

export enum Species {
  Dog = 'Dog',
  Cat = 'Cat'
}

@Entity('animals')
export default class Animal extends _Entity {

  @Column()
  name: string;

  @Column()
  size: string;

  @Column()
  sex: string;

  @Column()
  isCastrated: boolean;

  @Column()
  approximateAge: number;

  @Column('enum', { enum: Species })
  specie: Species;
}