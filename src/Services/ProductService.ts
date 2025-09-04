import { Products } from "../entity/Products.entity";
import { ProductRepository } from "../Repository/Repository";
export class ProductService{

    private  productRepository:typeof ProductRepository = ProductRepository;

    async save(product:Products):Promise<Products>{
        const result:Products =  await this.productRepository.save(product);
        return product; // Retorna el producto guardado (simulado)
    }

    async update(id:number,updateData:Partial<Products>):Promise<Products>{
        const product =  await this.productRepository.findOneBy({id:id});

        if(!product){
            throw new Error("Product not found");
        }
         await this.productRepository.merge(product,updateData);

         const result = await this.productRepository.save(product);

        return result;
    }
    
    async delete(id:number):Promise<boolean>{
        const product =  await this.productRepository.findOneBy({id:id});    
        if(!product){
            throw new Error("Product not found");
        }
        const rs = await this.productRepository.delete(id);
        console.log(rs);

        return rs.affected!==undefined && rs.affected!>0;

    }

    async findById(id:number):Promise<Products>{

        const result:unknown = await this.productRepository.finId({id:id});

        if(!result){
            throw new Error("Product not found");
        }
        return result as Products;
    }
    
    
}