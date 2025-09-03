import { Request, Response } from "express";
import { Products } from "../entity/Products.entity";
import { ProductDto } from "../utils/Dto/Dto";
import { ProductService } from "../Services/ProductService";
import { CategoryService } from "../Services/CategoryService";
import { validate } from "class-validator";
import { parseErrors } from "../utils/ParsearErrores";


export class ProductController{

    private static CategoriaService= new CategoryService();
    private static ProductService= new ProductService();

    static async findALl(req:Request, res:Response):Promise<Response>{  
        return res.status(200).json({message:"find all products"});
    }
    static async finById(req:Request, res:Response):Promise<Response>{
        return res.status(200).json({message:"find product by id"});
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






        
        return res.status(200).json({message:"save product"});
    }
    static async update(req:Request, res:Response):Promise<Response>{
        return res.status(200).json({message:"update product"});
    }
    static async delete(req:Request, res:Response):Promise<Response>{
        return res.status(200).json({message:"delete product"});
    }
}