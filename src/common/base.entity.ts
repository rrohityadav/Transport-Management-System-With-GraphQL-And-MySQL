import { ObjectType, Field } from '@nestjs/graphql';
import { Entity,  CreateDateColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity()
export class BaseSchema {
  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
