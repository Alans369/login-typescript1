
import { Categories } from "../entity/Cateories.entity";
import { CategoryRepository } from "../Repository/Repository";

export class CategoryService{

    private categoryRepository:typeof CategoryRepository = CategoryRepository;

    async save(categoria:Categories):Promise<Categories>{

        const result =  await this.categoryRepository.save(categoria);

        return result;

    }

    // Implementación de métodos CRUD para la entidad Categories

}