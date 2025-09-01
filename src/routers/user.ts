import   {Router } from "express";
import { UserController } from "../controller/Usercontroller";



export const Userouter = Router();

Userouter.post('/create',UserController.createUser);
