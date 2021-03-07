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
  } from 'typeorm';

import { Subsector } from 'src/subsectors/subsector.entity';
import { PlacesType } from 'src/placesType/placesType.entity';
  
  @Entity('places')
  @Unique(['name'])
  export class Place extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @OneToOne(() => PlacesType)
    @JoinColumn({ name: "type_id" })
    placesType: PlacesType;
  
    @ManyToOne(() => Subsector)
    @JoinColumn({ name: "subsector_id" })
    subsector: Subsector;
  
    @Column({ nullable: false, type: 'varchar', length: 200 })
    name: string;

    @Column({ nullable: false, type: 'varchar' })
    lat: Double;

    @Column({ nullable: false, type: 'varchar' })
    long: Double;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }