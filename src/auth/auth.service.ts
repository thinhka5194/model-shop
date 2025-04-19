import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register(dto: CreateUserDto): Promise<User> {
    const existing = await this.userService.findByUsername(dto.username);
    if (existing) {
      throw new UnauthorizedException('Username already exists');
    }
    return this.userService.create(dto);
  }

  async login(username: string, password: string): Promise<User> {
    const user = await this.userService.findByUsername(username);
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Invalid username or password');
    }
    return user;
  }
}
