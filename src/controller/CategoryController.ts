import  { Request, Response } from "express";
import { validate } from "class-validator";
import { Categories } from "../entity/Cateories.entity";
import { parseErrors } from "../utils/ParsearErrores";
import { CategoryService } from "../Services/CategoryService";

export class CategoryController{

     static async createCategory(req:Request, res:Response):Promise<Response>{ 

        const name =req.body.name??'';
        const Categoria = new Categories();
        Categoria.name=name;
        const errors = await validate(Categoria)
        if (errors.length > 0) {
            const messages:string[] = parseErrors(errors)
            return res.status(400).json({ errors: messages});
        }
        else{
            const categoryService = new CategoryService();
            Categoria.slug=name.toLowerCase();
            const result = await categoryService.save(Categoria);
            return res.status(200).json(result);

        }


        
        
    }



}