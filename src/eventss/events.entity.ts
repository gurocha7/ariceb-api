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

  import {Place} from 'src/places/place.entity'
  
  @Entity('eventss')
  @Unique(['name'])
  export class Events extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @ManyToOne(() => Place)
    @JoinColumn({ name: "place_id" })
    place: Place;
  
    @Column({ nullable: false, type: 'varchar', length: 200 })
    name: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }