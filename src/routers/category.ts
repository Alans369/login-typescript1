import   {Router } from "express";
import {CategoryController} from "../controller/CategoryController"



export const Categoryrouter = Router();

Categoryrouter.post('/',CategoryController.createCategory);

Categoryrouter.put('/:id',CategoryController.updateCategory);

Categoryrouter.delete('/:id',CategoryController.deleteCategory);