import {
    BaseEntity,
    Entity,
    Unique,
    ManyToOne,
    ManyToMany,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Double,
    OneToMany,
  } from 'typeorm';

  import { Subsector } from 'src/subsectors/subsector.entity';
  
  @Entity('internal_route')
  export class InternalRoute extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @ManyToMany(() => Subsector)
    @JoinColumn({ name: "origin_id" })
    originId: Subsector;

    @ManyToMany(() => Subsector)
    @JoinColumn({ name: "destination_id" })
    destinationId: Subsector;

    @Column()
    qrcodeTag: string;

    @Column()
    destinationTag: string;

    @Column()
    steps: string;

    @Column()
    nextQrcodeTags: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }