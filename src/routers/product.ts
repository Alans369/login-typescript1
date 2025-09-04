import   {Router } from "express";
import { ProductController } from "../controller/ProductController";



export const Productrouter = Router();
Productrouter.get('/',ProductController.findALl);
Productrouter.get('/:id',ProductController.finById);
Productrouter.post('/',ProductController.CreateProduct);
Productrouter.put('/:id',ProductController.update);
Productrouter.delete('/:id',ProductController.delete);

