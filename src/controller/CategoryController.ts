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
            const result = await CategoryController.categoryService.save(Categoria);
            return res.status(200).json(result);
        }
    }
    static async updateCategory(req:Request, res:Response):Promise<Response>{

            const id:unknown = req.params.id;
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

                await CategoryController.categoryService.update(parseInt(id as string),UpdateData);
            } catch (error) {
                return res.status(400).json({message:(error as Error).message});
                
            }

            return res.status(200).json({message:"update category"});
    }

    static async deleteCategory(req:Request, res:Response):Promise<Response>{

            const id:unknown = req.params.id;

            if(!id || isNaN(parseInt(id as string))){
                return res.status(400).json({message:"Invalid id"});
            }
            try{
                 await CategoryController.categoryService.delete(parseInt(id as string));

            }
            catch(error){
                return res.status(400).json({message:(error as Error).message});
            }
            // Lógica para eliminar la categoría por ID
            return res.status(200).json({message:`delete category ${id}`});
    }

    static async findById(req:Request, res:Response):Promise<Response>{

            const id:unknown = req.params.id;

            if(!id || isNaN(parseInt(id as string)) || id === undefined){
                return res.status(400).json({message:"Invalid id"});
            }

            try {
                const Categoria = await CategoryController.categoryService.findById(parseInt(id as string));
                return res.status(200).json(Categoria);
            } catch (error) {
                return res.status(400).json({message:(error as Error).message});
                
            }
    }
    static async listCategories(req:Request, res:Response):Promise<Response>{

            let page:unknown=req.query.page;
            let pageSize:unknown=req.query.pageSize;

            if(page===undefined) page=1;
            if(pageSize===undefined) pageSize=5;

            if(isNaN(parseInt(page as string)) ||isNaN(parseInt(pageSize as string))){
                return res.status(400).json({message:"Invalid page or pageSize"});
            }
            if(parseInt(page as string)<=0 || parseInt(pageSize as string)<=0){
                page=1;
                pageSize=5;
            }
            const  result = await CategoryController.categoryService.listCategories(parseInt(page as string),parseInt(pageSize as string));

            return res.status(200).json({
                data:result.data,
                total:result.total,
                page:parseInt(page as string),
                pageSize:parseInt(pageSize as string)
            });
    }
}