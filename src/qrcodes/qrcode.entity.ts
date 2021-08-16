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
  import { Building } from 'src/buildings/buildings.entity';
  import { Sector } from 'src/sectors/sector.entity'
  import { Subsector } from 'src/subsectors/subsector.entity'
  
  @Entity('qrcode')
  @Unique(['name'])
  export class Qrcode extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;
  
    @ManyToOne(() => Building)
    @JoinColumn({ name: 'building_id' })
    building: Building;

    @ManyToOne(() => Sector)
    @JoinColumn({ name: 'sector_id' })
    sector: Sector;

    @ManyToOne(() => Subsector)
    @JoinColumn({ name: 'subsector_id' })
    subsector: Subsector;
  
    @Column({ nullable: false, type: 'varchar', length: 200 })
    name: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }
  