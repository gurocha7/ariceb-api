import {
    BaseEntity,
    Entity,
    Unique,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('sector')
@Unique(['name'])
export class Sector extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: String;

    @Column({nullable: false, type: 'varchar', length: 200 })
    name: String;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
