import   {Router } from "express";
import { AuthController } from "../controller/AuthController";



export const Authrouter = Router();

Authrouter.post('/',AuthController.login);



