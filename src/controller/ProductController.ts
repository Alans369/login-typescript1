import { Request, Response } from "express";
import { Products } from "../entity/Products.entity";
import { ProductDto } from "../utils/Dto/Dto";
import { ProductService } from "../Services/ProductService";
import { CategoryService } from "../Services/CategoryService";
import { validate } from "class-validator";
import { parseErrors } from "../utils/ParsearErrores";
import { skip } from "node:test";


export class ProductController{

    private static CategoriaService= new CategoryService();
    private static ProductService= new ProductService();

    static async findALl(req:Request, res:Response):Promise<Response>{  
        return res.status(200).json({message:"find all products"});
    }
    static async finById(req:Request, res:Response):Promise<Response>{
        const id:unknown = req.params.id;

        if(!id || isNaN(parseInt(id as string))){
            return res.status(400).json({message:"Invalid id"});
        }

        try {
            const result = await ProductController.ProductService.findById(parseInt(id as string));
            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json({message:(error as Error).message});
            
        }
        
    }
    static async CreateProduct(req:Request, res:Response):Promise<Response>{
        const Producto = new Products();

        const body:ProductDto = req.body;

        if (typeof body.categoryId !='number'){ return res.status(400).json({message:"categoryId is invalid"});}

        Producto.title = body.title;
        Producto.price = body.price;
        Producto.descripcion = body.description;
        Producto.images = body.images;
        //Producto.category = body.categoryId;

        try {
            const category = await ProductController.CategoriaService.findById(body.categoryId);
            Producto.category = category;
        } catch (error) {

            return res.status(400).json({message:"category is  invalid"});
        }

        const errors = await validate(Producto);
        if (errors.length > 0) {
            const messages:string[] = parseErrors(errors)
            return res.status(400).json({ errors: messages});
        }

        Producto.slug = body.title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');

        const result = await ProductController.ProductService.save(Producto);
        return res.status(200).json(result);
    }
    static async update(req:Request, res:Response):Promise<Response>{

        const producto = new Products();

        const id:unknown = req.params.id;
        console.log(typeof id);

        if(!id || isNaN(parseInt(id as string))){
            return res.status(400).json({message:"Invalid id"});
        }

        if (typeof req.body.categoryId !='number'){ return res.status(400).json({message:"categoryId is invalid"});}

        let ProductUpdateDto=req.body;
        producto.title = ProductUpdateDto.title;
        producto.price = ProductUpdateDto.price;
        producto.descripcion = ProductUpdateDto.description;
        producto.images = ProductUpdateDto.images;

        const errors = await validate(producto,{skipMissingProperties:true});
        if (errors.length > 0) {
            const messages:string[] = parseErrors(errors)
            return res.status(400).json({ errors: messages});
        }

        try {
             producto.slug = producto.title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
            const result  = await ProductController.ProductService.update(parseInt(id as string),producto);
            return res.status(200).json(result);
            
        } catch (error) {
            return res.status(400).json({message:(error as Error).message});
            
        }



       
    }
    static async delete(req:Request, res:Response):Promise<Response>{
        const id:unknown = req.params.id;

        if(!id || isNaN(parseInt(id as string))){
            return res.status(400).json({message:"Invalid id"});
        }
        try{
             await ProductController.ProductService.delete(parseInt(id as string));
        }
        catch(error){
            return res.status(400).json({message:(error as Error).message});
        }


        return res.status(200).json({message:"delete product"});


    }
}