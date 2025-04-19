import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query(() => [Product])
  async getProducts(): Promise<Product[]> {
    return this.productService.findAll(); // trả về Promise<Product[]>
  }

  @Mutation(() => Product)
  async createProduct(
    @Args('data') data: CreateProductDto
  ): Promise<Product> {
    return this.productService.create(data); // trả về Promise<Product>
  }
}
