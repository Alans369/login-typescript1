

import { User } from "../entity/user.entity";

import { myDataSource } from "../ data-source";

    async function initializeDataSource(){
         await myDataSource.initialize();
        
    }

    initializeDataSource();
    console.log("Data Source has been initialized!");

 


export const UserRepository = myDataSource.getRepository(User).extend({
    findByName(firstName: string, lastName: string) {
        return this.createQueryBuilder("user")
            .where("user.firstName = :firstName", { firstName })
            .andWhere("user.lastName = :lastName", { lastName })
            .getMany()
    },
})