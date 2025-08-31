import { User } from "../entity/user.entity";
import { ICrud } from "../Interface/ICrud";
import { UserRepository } from "../Repository/Repository";


export class UserService implements ICrud{

    private userRepository:typeof UserRepository = UserRepository;

    save(user:User):User{
        this.userRepository.create(user);
        const result =  this.userRepository.save(user);
        console.log(result);
        return {} as User;
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