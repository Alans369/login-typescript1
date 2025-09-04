import jwt from 'jsonwebtoken';

var key:string = "holamundo"

export class JWT{

   static crearToken(data:{id:number,role:string}){
        var token= jwt.sign(data,key,{
            expiresIn:'1h' 
        });

        var refresch = jwt.sign({data,"type":"refresch"},key,{
            expiresIn:'2h' 
        });

        return {"token":token,"refresh":refresch}
    }

    static  VerificarToken(token:string){
        try {
         var decoded = jwt.verify(token,key);
         return decoded;
        } catch(err) {
            return err;
        // err
        }

    }

    static generarToken(data:{id:number,role:string}){
        var token= jwt.sign(data,key,{
            expiresIn:'1h' 
        });
        return token
    }

    

}