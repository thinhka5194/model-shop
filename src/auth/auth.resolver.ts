import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { User } from '../users/user.entity';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  async register(@Args('data') data: CreateUserDto): Promise<User> {
    return this.authService.register(data);
  }

  @Mutation(() => User)
  async login(
    @Args('username') username: string,
    @Args('password') password: string,
  ): Promise<User> {
    return this.authService.login(username, password);
  }
}
