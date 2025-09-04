import   {Router } from "express";
import { UserController } from "../controller/Usercontroller";



export const Userouter = Router();

Userouter.get('/:id',UserController.getUserById);
Userouter.post('/',UserController.createUser);
Userouter.put('/:id',UserController.updateUser);
Userouter.delete('/:id',UserController.deleteUser);

