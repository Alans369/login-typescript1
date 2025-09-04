import   {Router } from "express";
import { UserController } from "../controller/Usercontroller";
import { JwtMidd } from "../utils/middelwar/verifyToken";



export const Userouter = Router();

Userouter.get('/:id',JwtMidd.validar,UserController.getUserById);
Userouter.post('/',UserController.createUser);
Userouter.put('/:id',UserController.updateUser);
Userouter.delete('/:id',UserController.deleteUser);

