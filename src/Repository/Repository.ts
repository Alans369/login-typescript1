import { User } from "../entity/user.entity";
import { Categories } from "../entity/Cateories.entity";
import { Products } from "../entity/Products.entity";

import { myDataSource } from "../ data-source";

    async function initializeDataSource(){
         await myDataSource.initialize();
        
    }

    initializeDataSource();
    console.log("Data Source has been initialized!");
 
export const UserRepository = myDataSource.getRepository(User).extend({
    findByName(email: string, password: string) {
        return this.createQueryBuilder("user")
            .where("user.email = :email", { email })
            .andWhere("user.password = :password", { password })
            .getOne()
    },

  
});

export const CategoryRepository = myDataSource.getRepository(Categories).extend({
    borrar(id:number){
        return this.createQueryBuilder()
            .update(Categories)
            .set({estado:false})
            .where("id = :id",{id:id})
            .execute();
    },
    encontrarActivos(dato:{id:number}){
        const {id} = dato;
        
        return this.createQueryBuilder()
            .where("Categories.estado = :estado",{estado:true})
            .andWhere("Categories.id = :id",{id:id})
            .getOne();
    },
    selecionarPagina(page:number, pageSize:number){
        return this.createQueryBuilder("Categories")
            .where("Categories.estado = :estado",{estado:true})
            .skip((page - 1) * pageSize)
            .take(pageSize)
            .getManyAndCount();
    },
     findByName(Name: string) {
        return this.createQueryBuilder()
            .where("Categories.name = :Name", { Name })
            .getOne()
    },

    finById(dato:{id:number}){
        const {id} = dato;
        return this.createQueryBuilder("Categories")
            .where("Categories.id = :id",{id:id})
            .andWhere("Categories.estado = :estado",{estado:true})
            .getOne();
    }

});

export const ProductRepository = myDataSource.getRepository(Products).extend({
    finId(data:{id:number}) {
        const {id} = data;
        return this.createQueryBuilder("product")
            .leftJoinAndSelect("product.category", "category")
            .where("product.id = :id", { id:id}) // Ejemplo de filtro por ID
            .getMany();
    },
    

})
  