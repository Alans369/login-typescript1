import   {Router } from "express";
import { ProductController } from "../controller/ProductController";



export const Productrouter = Router();
Productrouter.post('/',ProductController.CreateProduct);
Productrouter.put('/:id',ProductController.update);

