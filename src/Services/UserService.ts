import { User } from "../entity/user.entity";
import { ICrud } from "../Interface/ICrud";
import { UserRepository } from "../Repository/Repository";


export class UserService {

    private userRepository:typeof UserRepository = UserRepository;

    async save(user:User):Promise<User>{
       // this.userRepository.create(user);
        const result:User = await  this.userRepository.save(user);
        
        return result;
       
    }

    async findById(id:number):Promise<User>{
        const result = await this.userRepository.findOneBy({id:id});
        if(!result){
            throw new Error("User not found");
        }
        return result;
    }
       

    async update(id:number,update:Partial<User>):Promise<User>{
        const user = await this.userRepository.findOneBy({id:id});
        if(!user){
            throw new Error("User not found");
        }
        await this.userRepository.merge(user,update)

        const result = await this.userRepository.save(user);

        return result;
    }

    async delete(id:number):Promise<boolean>{
        const user = await this.userRepository.findOneBy({id:id});
        if(!user){
            throw new Error("User not found");
        }
        const rs = await this.userRepository.delete(id);
        return rs.affected!==undefined && rs.affected!>0;
    }
    
    async findUserBypasswordAndEmail(email:string,password:string):Promise<User>{
        const result = await this.userRepository.findByName(email,password);
        if(!result){
            throw new Error("User not found");
        }
        return result;
    }




}