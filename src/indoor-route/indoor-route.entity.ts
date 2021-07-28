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
  
  @Entity('indoor_route')
  export class IndoorRoute extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @ManyToMany(() => Subsector)
    @JoinColumn({ name: "origin_id" })
    originId: Subsector;

    @ManyToMany(() => Subsector)
    @JoinColumn({ name: "destination_id" })
    destinationId: Subsector;

    @Column({name: "qrcode_tag",nullable: false, default: ""})
    qrcodeTag: string;

    @Column({name: "destination_tag",nullable: false, default: ""})
    destinationTag: string;

    @Column({nullable: false, default: ""})
    steps: string;

    @Column({name: "nextqrcode_tags",nullable: false, default: ""})
    nextQrcodeTags: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }