import {
    BaseEntity,
    Entity,
    Unique,
    OneToOne,
    JoinColumn,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { Place } from 'src/places/place.entity'
  
  @Entity('placesType')
  export class PlacesType extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;
  
    @OneToOne(() => Place)
    @JoinColumn({ name: "place_id" })
    place: Place;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }