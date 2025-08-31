import { User } from "../entity/user.entity";
import { ICrud } from "../Interface/ICrud";
import { UserRepository } from "../Repository/Repository";


export class UserService implements ICrud{

    private userRepository:typeof UserRepository = UserRepository;

    async save(user:User):Promise<User>{
       // this.userRepository.create(user);
        const result:User = await  this.userRepository.save(user);
        
        return result;
       
    }

    findAll():User{
        return {} as User;
    }

    findById(id:number):User{
        return {} as User;
    }

    update(id:number):User{
        return {} as User;
    }

    delete(id:number):boolean{
        return true;
    }   




}