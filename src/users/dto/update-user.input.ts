
import { InputType, Field, Int } from '@nestjs/graphql';
import { UserRole } from '../../common/enum';

@InputType()
export class UpdateUserInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  fullName?: string;

  @Field({ nullable: true })
  email?: string;

  @Field(() => Int, { nullable: true })
  age?: number;

  @Field(() => UserRole, { nullable: true })
  role?: UserRole;

}

@InputType()
export class UpdatePasswordInput {
  @Field(() => Int)
  id: number;

  @Field()
  password: string;
}
