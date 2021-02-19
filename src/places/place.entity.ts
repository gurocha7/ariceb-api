import {
    BaseEntity,
    Entity,
    Unique,
    ManyToOne,
    JoinColumn,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';

import { Subsector } from 'src/subsectors/subsector.entity';
  
  @Entity('places')
  @Unique(['name'])
  export class Place extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;
  
    @ManyToOne(() => Subsector)
    @JoinColumn({ name: "subsector_id" })
    subsector: Subsector;
  
    @Column({ nullable: false, type: 'varchar', length: 200 })
    name: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }