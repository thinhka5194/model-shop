import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './products/product.module';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { Product } from './products/product.entity';
import { User } from './users/user.entity';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UserService } from './users/user.service';
import { UserController } from './users/user.controller';
import { UserResolver } from './users/user.resolver';
import { AuthResolver } from './auth/auth.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'thinh', // hoặc mật khẩu của bạn
      database: 'model_shop',
      entities: [Product, User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,  // Thêm cấu hình driver ApolloDriver
      autoSchemaFile: 'schema.gql',  // Tạo file schema tự động
    }),
    ProductModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AuthController, UserController],
  providers: [UserService, UserResolver, AuthService, AuthResolver],
})
export class AppModule {}
