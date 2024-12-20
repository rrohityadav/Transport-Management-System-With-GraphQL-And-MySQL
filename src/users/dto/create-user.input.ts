import { InputType, Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from '../entities/user.entity';
import { UserRole } from '../../common/enum';

@InputType()
export class CreateUserInput {
  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  email: string;

  @Field(() => Int, { nullable: true })
  age?: number;

  @Field()
  fullName: string;

  @Field(() => UserRole)
  role: UserRole;
}

@InputType()
export class QueryUserArg {
  @Field(() => Int)
  id: number;
}

@InputType()
export class LoginInput {
  @Field()
  username: string;

  @Field()
  password: string;
}
@ObjectType()
export class AuthResponse {
  @Field(() => User)
  user: User;

  @Field()
  access_token: string;
}
