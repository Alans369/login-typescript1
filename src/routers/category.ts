import   {Router } from "express";
import {CategoryController} from "../controller/Usercontroller"



export const Userouter = Router();

Userouter.post('/create',UserController.createUser);