import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn } from "typeorm"
import {
    IsNotEmpty,
    IsString,
} from "class-validator"

@Entity()
export class Categories {
    @PrimaryGeneratedColumn()
    id!: number

    @IsNotEmpty({ message: "El nombre es obligatorio" })
    @IsString({ message: "El nombre debe ser una cadena de texto" })
    @Column()
    name!: string
    
    @Column()
    slug!:string

    @CreateDateColumn()
    creationAt!:Date
        
    @UpdateDateColumn() 
    updatedAt!:Date
    
   
}