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
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number
    
    @IsNotEmpty()
    @MinLength(5, {
    message: 'Title is too short',
   })
    @Column()
    email!: string
    
    @MinLength(5, {
    message: 'Title is too short',
   })
    @Column()
    name!: string
    
    @MinLength(5, {
    message: 'Title is too short',
   })
    @Column()
    password!:string
    
    @MinLength(5, {
    message: 'Title is too short',
   })
    @Column()
    role!: string
    
    @CreateDateColumn()
    creationAt!:Date
    
   
    @UpdateDateColumn() 
    updatedAt!:Date
}