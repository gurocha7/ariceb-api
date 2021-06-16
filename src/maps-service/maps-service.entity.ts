import {
    BaseEntity,
    Entity,
    Unique,
    ManyToOne,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Double,
    OneToMany,
  } from 'typeorm';

  @Entity('route')
  @Unique(['name'])
  export class Route extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:String;
    
    @Column({ nullable: false, type: 'varchar', length: 200 })
    name: string;
  } 