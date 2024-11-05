import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Driver {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
