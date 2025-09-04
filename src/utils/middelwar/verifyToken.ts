import { json } from "stream/consumers";
import { JWT } from "../Jwt";
import { Request,Response,NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";

export class JwtMidd{


    static validar(req:Request,res:Response,next:NextFunction){
        try {
            const authHeader = req.headers.authorization;

            if (!authHeader) {
                return res.status(401).json({error:"Token no proporcionado"})
            }

            const parts = authHeader.split(' ');
    
            if (parts.length !== 2 || parts[0] !== 'Bearer') {
                return res.status(401).json({error:"Formato de token inválido"});
            }

            const token = parts[1];
            const decoded = JWT.VerificarToken(token as string);

            if (typeof decoded ==='object'){
                if(decoded.role==='admin'){
                    next()
                }
                else{
                      return res.status(403).json({
                    error: "notienes permiso"
                });
                }
            }else{
                  return res.status(500).json({
                    error: "erro del servidor"
                });

            }

            
            console.log(typeof decoded)

        
            

         
            // Guardamos la información del usuario decodificada en el request
               
            
        } catch (err: any) {
            console.log('Error de autenticación:', err.message);
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({
                    error: "El token ha expirado"
                });
            }
          
            return res.status(401).json({
                error: "Token inválido"
            });
        }
      

    }

}