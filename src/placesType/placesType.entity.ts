import {
    BaseEntity,
    Entity,
    Unique,
    OneToOne,
    JoinColumn,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
  } from 'typeorm';
  import { Place } from 'src/places/place.entity'
  
  @Entity('placesType')
  export class PlacesType extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({nullable: false, type: 'varchar', length: 200})
    name: String
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }