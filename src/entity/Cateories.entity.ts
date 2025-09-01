import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn } from "typeorm"
import {
    IsNotEmpty,
    IsString,
} from "class-validator"

@Entity()
export class Categories {
    @PrimaryGeneratedColumn()
    id!: number

    @IsNotEmpty()
    @IsString()
    @Column()
    name!: string
    
    @Column()
    slug!:string

    @CreateDateColumn()
    creationAt!:Date
        
       
    @UpdateDateColumn() 
    updatedAt!:Date
    
   
}