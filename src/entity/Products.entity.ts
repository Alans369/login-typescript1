import { Entity,
      Column,
      PrimaryGeneratedColumn,
      CreateDateColumn,
      UpdateDateColumn,
      OneToOne, 
      JoinColumn,  
      ManyToOne} from "typeorm"

import { Categories } from "./Cateories.entity"

import { IsArray, IsIn, IsInt, IsNotEmpty, IsString, IsUrl, Min } from "class-validator"
@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id!: number
    
    @IsNotEmpty({message:"title is required"})
    @IsString({message:"title must be a string"})
    @Column()
    title!: string

    @Column()
    slug!: string
    
    @IsNotEmpty({message:"price is required"})
    @IsInt()
    @Min(1)
    @Column()
    price!: number
    
    @IsNotEmpty({message:"description is required"})
    @IsString({message:"description must be a string"})
    @Column()
    descripcion!: string

    @ManyToOne(() => Categories, category => category.products)
    @JoinColumn()
    category!: Categories
    
    @IsArray()
    @Column('json', { nullable: true })
    images!: string[];

    @CreateDateColumn()
    creationAt!:Date
        
    @UpdateDateColumn() 
    updatedAt!:Date
    
   
}