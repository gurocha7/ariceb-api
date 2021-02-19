import {
    BaseEntity,
    Entity,
    Unique,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('eventss')
  @Unique(['name'])
  export class Events extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;
  
    @Column({ nullable: false, type: 'varchar', length: 200 })
    name: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }