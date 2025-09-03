import   {Router } from "express";
import {CategoryController} from "../controller/CategoryController"



export const Categoryrouter = Router();


Categoryrouter.get('/',CategoryController.listCategories);

Categoryrouter.get('/:id',CategoryController.findById);

Categoryrouter.post('/',CategoryController.createCategory);

Categoryrouter.put('/:id',CategoryController.updateCategory);

Categoryrouter.delete('/:id',CategoryController.deleteCategory);