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

@Entity('sectors')
@Unique(['name'])
export class Sector extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Building)
  @JoinColumn({ name: "building_id" })
  building: Building;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
