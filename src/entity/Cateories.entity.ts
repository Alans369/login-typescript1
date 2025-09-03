import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, OneToMany } from "typeorm"
import {
    IsNotEmpty,
    IsString,
} from "class-validator"

import { IsCategoryAlreadyExist } from "../utils/CustomValidate/CategoryAlredyExist";
import { Products } from "./Products.entity";   

@Entity()
export class Categories {
    @PrimaryGeneratedColumn()
    id!: number

    @IsNotEmpty({ message: "El nombre es obligatorio" })
    @IsString({ message: "El nombre debe ser una cadena de texto" })
    @Column()
    @IsCategoryAlreadyExist({ message: "La categoría ya existe" })
    name!: string
    
    @Column()
    slug!:string
    
    @Column({default:true})
    estado!:boolean;

    @CreateDateColumn()
    creationAt!:Date
        
    @UpdateDateColumn() 
    updatedAt!:Date

    @OneToMany(() => Products, products => products.category)
     products!: Products[];

    
   
}