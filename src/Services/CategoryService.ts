
import { Categories } from "../entity/Cateories.entity";
import { CategoryRepository } from "../Repository/Repository";

export class CategoryService{

    private categoryRepository:typeof CategoryRepository = CategoryRepository;

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

    // Implementación de métodos CRUD para la entidad Categories

}