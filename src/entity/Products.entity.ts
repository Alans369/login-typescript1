import { Entity,
      Column,
      PrimaryGeneratedColumn,
      CreateDateColumn,
      UpdateDateColumn,
      OneToOne, 
      JoinColumn  } from "typeorm"

import { Categories } from "./Cateories.entity"

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    title!: string

    @Column()
    slug!: string
    
    @Column()
    price!: number

    @Column()
    descripcion!: string

    @OneToOne(() => Categories)
    @JoinColumn()
    category!: Categories

    @Column('json', { nullable: true })
    images!: string[];

    @CreateDateColumn()
    creationAt!:Date
        
    @UpdateDateColumn() 
    updatedAt!:Date
    
   
}