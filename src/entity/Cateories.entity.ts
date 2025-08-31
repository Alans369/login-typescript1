import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn } from "typeorm"

@Entity()
export class Categories {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string
    
    @Column()
    slug!:string

    @CreateDateColumn()
    creationAt!:Date
        
       
    @UpdateDateColumn() 
    updatedAt!:Date
    
   
}