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
  export class Route extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:String;
    
    @Column({ nullable: false, type: 'varchar', length: 200 })
    originBuildingID: string;

    @Column({ nullable: false, type: 'varchar', length: 200 })
    destinyBuildingID: string;

    @Column({nullable: false, type: 'float', default: 0.0})
    originLat: number;

    @Column({nullable: false, type: 'float', default: 0.0})
    originLong: number;

    @Column({nullable: false, type: 'float', default: 0.0})
    destinyLat: number;
    
    @Column({nullable: false, type: 'float', default: 0.0})
    destinyLong: number;
  } 