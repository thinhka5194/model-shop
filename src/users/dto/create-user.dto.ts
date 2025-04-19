import { InputType, Field } from '@nestjs/graphql';

@InputType('CreateUserInput')
export class CreateUserDto {
  @Field()
  username: string;

  @Field()
  password: string;
}
