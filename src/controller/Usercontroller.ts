import  { Request, Response } from "express";
import { User } from "../entity/user.entity";
import { validate } from "class-validator";
import { UserDto } from "../utils/Dto/Dto";
import { UserService } from "../Services/UserService";
import { parseErrors } from "../utils/ParsearErrores";




export class UserController{ 

   // constructor(
  private static userService:UserService= new UserService();          // ✅ Depende de abstracción
  //) {}


    static async getUserById(req:Request, res:Response):Promise<Response>{  
      const id:unknown = req.params.id;

        if(!id || isNaN(parseInt(id as string))){
            return res.status(400).json({message:"Invalid id"});
        }

        try {
          const result = await UserController.userService.findById(parseInt(id as string));
          return res.status(200).json(result);
          
        } catch (error) {
          return res.status(400).json({message:(error as Error).message});
          
        }


    }



    static async createUser(req:Request, res:Response):Promise<Response>{ 
      const usuario:UserDto= req.body
      var user = new User();
      user.email=usuario.email??'';
      user.name=usuario.name??'';
      user.password=usuario.password??'';
      user.role=usuario.role??'';


      const errors = await validate(user)
      if (errors.length > 0) {
          const messages:string[] = parseErrors(errors)
          return res.status(400).json({ errors: messages});
        
      } else {
         console.log('Validation succeed')
        
          const result = await UserController.userService.save(user);

          return res.json(result);
      }

    }

    static async  updateUser(req:Request, res:Response):Promise<Response>{ 
      const user = new User();
      const id:unknown = req.params.id;
      const body:UserDto= req.body

      if(!id || isNaN(parseInt(id as string))){
            return res.status(400).json({message:"Invalid id"});
        }
          user.email=body.email;
          user.name=body.name;
          user.password=body.password;
          user.role=body.role;
         const errors = await validate(user,{skipMissingProperties:true});
        if (errors.length > 0) {
            const messages:string[] = parseErrors(errors)
            return res.status(400).json({ errors: messages});
        }
        try {
          const result = await UserController.userService.update(parseInt(id as string),user);
          return res.json(result);
          
        } catch (error) {
          return res.status(400).json({message:(error as Error).message});
          
        }
    }

    static async deleteUser(req:Request, res:Response):Promise<Response>{
      const id:unknown = req.params.id;

      if(!id || isNaN(parseInt(id as string))){
            return res.status(400).json({message:"Invalid id"});
        }
        try{
           await UserController.userService.delete(parseInt(id as string));
           return res.status(204).json({messages:"User deleted"});
        }catch(error){
          return res.status(400).json({message:(error as Error).message});
        }
    }



 }