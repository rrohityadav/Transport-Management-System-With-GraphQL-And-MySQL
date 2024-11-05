import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { CreateUserInput, QueryUserArg } from './dto/create-user.input';
import { Logger } from '@nestjs/common';
import { UpdatePasswordInput, UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UsersResolver {
  logger = new Logger(UsersResolver.name);
  constructor(private readonly usersService: UsersService) {
    this.logger.debug('User resolver is successfully run !');
  }

  @Mutation(() => User)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('payload') payload: QueryUserArg) {
    return this.usersService.findOne(payload);
  }

  @Mutation(() => Int)
  updateUser(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<number> {
    return this.usersService.update(updateUserInput);
  }

  @Mutation(() => String)
  updateUserPassword(
    @Args('updatePasswordInput') updatePasswordInput: UpdatePasswordInput,
  ) {
    return this.usersService.updatePassword(updatePasswordInput);
  }
  @Mutation(() => String)
  async removeUser(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<string> {
    const result = await this.usersService.removeUser(id);
    return result.message;
  }
}
