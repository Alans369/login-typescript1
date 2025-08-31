import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn, UpdateDateColumn, Not } from "typeorm"
import {
    Contains,
    IsInt,
    Length,
    IsEmail,
    IsFQDN,
    IsDate,
    MinLength,
    Max,
    IsNotEmpty,
} from "class-validator"

import { ContainsRole } from "../utils/CustomValidate/ContainsRole"
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number
    
    @IsNotEmpty({message:'email should not be empty'})
    @IsEmail()
    @Column()
    email!: string
    
    @IsNotEmpty({message:'name should not be empty'})
    @MinLength(5, {
    message: 'name is too short',
   })
    @Column()
    name!: string
    
    @IsNotEmpty({message:'password should not be empty'})
    @MinLength(5, {
    message: 'password is too short',
   })
    @Column()
    password!:string
    
    @IsNotEmpty({message:'role should not be empty'})
    @ContainsRole('admin')  
    @Column()
    role!: string
    
    @CreateDateColumn()
    creationAt!:Date
    
   
    @UpdateDateColumn() 
    updatedAt!:Date
}