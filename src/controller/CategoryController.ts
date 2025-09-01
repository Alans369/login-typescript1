import  { Request, Response } from "express";
import { validate } from "class-validator";
import { Categories } from "../entity/Cateories.entity";
import { parseErrors } from "../utils/ParsearErrores";
import { CategoryService } from "../Services/CategoryService";

export class CategoryController{

    private static categoryService:CategoryService = new CategoryService();

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
            
            Categoria.slug=name.toLowerCase();
            const result = await this.categoryService.save(Categoria);
            return res.status(200).json(result);

        }
    }
    static async updateCategory(req:Request, res:Response):Promise<Response>{

            const id:unknown = req.params.id;

            const Cc = new CategoryService();

            const name = req.body.name;

            if(!id || isNaN(parseInt(id as string))){
                return res.status(400).json({message:"Invalid id"});
            }

            if(name===undefined || name.length===0){
                return res.status(400).json({message:"Name is required"});
            }

            try {

                const UpdateData:Partial<Categories> = {
                    name:name,
                    slug:name.toLowerCase()
                };

                await Cc.update(parseInt(id as string),UpdateData);
            } catch (error) {
                return res.status(400).json({message:(error as Error).message});
                
            }

            return res.status(200).json({message:"update category"});
    }

}