import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

enum Species {
  Dog = 'Dog',
  Cat = 'Cat'
}

@Entity('Animals')
class Animal {

  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Animal;
