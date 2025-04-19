import { InputType, Field } from '@nestjs/graphql';

@InputType('CreateProductInput') // Dùng chung cho GraphQL Input
export class CreateProductDto {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  price: number;

  @Field()
  stock: number;

  @Field({ nullable: true })
  imageUrl?: string;
}
