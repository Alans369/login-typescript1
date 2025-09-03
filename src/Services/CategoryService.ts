
import { Categories } from "../entity/Cateories.entity";
import { CategoryRepository } from "../Repository/Repository";

export class CategoryService{

    private  categoryRepository:typeof CategoryRepository = CategoryRepository;

    async save(categoria:Categories):Promise<Categories>{

        const result =  await this.categoryRepository.save(categoria);

        return result;

    }

    async update(id:number,updateData:Partial<Categories>):Promise<Categories>{
        const categoria =  await this.categoryRepository.findOneBy({id:id});

        if(!categoria){
            throw new Error("Category not found");
        }
         await this.categoryRepository.merge(categoria,updateData);

         const result = await this.categoryRepository.save(categoria);

        return result;
    }

    async delete(id:number):Promise<boolean>{
        const categoria =  await this.categoryRepository.encontrarActivos({id:id});

        if(!categoria){
            throw new Error("Category not found");
        }
        const rs = await this.categoryRepository.borrar(id);
        console.log(rs);

        return rs.affected!==undefined && rs.affected>0;

    }
    async findById(id:number):Promise<Categories>{

        const result:unknown = await this.categoryRepository.finById({id:id});

        if(!result){
            throw new Error("Category not found");
        }

        return result as Categories;

    }

    


}