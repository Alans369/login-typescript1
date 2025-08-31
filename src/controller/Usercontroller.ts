import { ICrud } from "../Interface/ICrud";
import  { Request, Response } from "express";
import { User } from "../entity/user.entity";
import { validate } from "class-validator";
import { UserDto } from "../utils/Dto/Dto";


export class UserController{ 

   // constructor(
    //private userService: ICrud             // ✅ Depende de abstracción
  //) {}
    static async createUser(req:Request, res:Response):Promise<Response>{ 

      const usuario:UserDto= req.body
      var user = new User();
      user.email=usuario.email??'';
      user.name=usuario.name??'';
      user.password=usuario.password??'';
      user.role=usuario.role??'';

      var erros:string[]=[];
      var messages:any[]=[];

      const errors = await validate(user)
      if (errors.length > 0) {
        //console.log((errors))
          for (let i:number = 0; i < errors.length; i++) {
            
            messages.push(errors[i]?.constraints)
          }

          for (let i:number = 0; i < messages.length; i++) {
            
            for(const [key, value] of Object.entries(messages[i])){
              erros.push(value as string)
            }
          }

          //console.log(messages)
          return res.status(400).json({messages:erros})
      } else {
         console.log('Validation succeed')
          return res.send('User created successfully');
      }

     

    }



 }