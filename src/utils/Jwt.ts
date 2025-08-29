import jwt from 'jsonwebtoken';

var key:string = "holamundo"

export class JWT{

    crear(){
        var token = jwt.sign({ foo: 'bar' },key,{
            expiresIn:'1h' 
        });
    }

}