import {
  BaseEntity,
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('sectors')
@Unique(['name'])
export class Sector extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
