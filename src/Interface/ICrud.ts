import { User } from "../entity/user.entity";

export interface ICrud{
    
    save(user:User):Promise<User>;
    findAll():User;
    findById(id:number):User;
    update(id:number):User;
    delete(id:number):boolean;

}