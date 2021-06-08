import {
  BaseEntity,
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Double,
} from 'typeorm';

@Entity('buildings')
@Unique(['name'])
export class Building extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @Column({ nullable: false })
  number: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({nullable: false, type: 'float', default: 0.0})
  lat: number;

  @Column({nullable: false, type: 'float', default: 0.0})
  long: number;
}
