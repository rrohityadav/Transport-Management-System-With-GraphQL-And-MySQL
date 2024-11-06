import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthResponse, LoginInput } from '../users/dto/create-user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthResponse)
  async login(@Args('input') input: LoginInput): Promise<AuthResponse> {
    const user = await this.authService.validateUser(
      input.username,
      input.password,
    );
    const token = await this.authService.generateToken(user);
    return {
      user,
      ...token,
    };
  }

  @Query(() => String)
  @UseGuards(GqlAuthGuard)
  protectedData() {
    return 'This is protected data!';
  }
}
