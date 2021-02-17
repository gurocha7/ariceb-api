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
import { Sector } from 'src/sectors/sector.entity';
  
  @Entity('subsectors')
  @Unique(['name'])
  export class Subsector extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @ManyToOne(() => Sector)
    @JoinColumn({ name: "sector_id" })
    sector: Sector;
  
    @Column({ nullable: false, type: 'varchar', length: 200 })
    name: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }