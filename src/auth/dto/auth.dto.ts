import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AuthLoginDto {
  @Field()
  username: string;

  @Field()
  password: string;
}

@InputType()
export class AuthRegisterDto {
  @Field()
  username: string;

  @Field()
  password: string;
}
