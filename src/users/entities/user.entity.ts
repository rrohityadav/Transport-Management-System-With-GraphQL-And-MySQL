import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserRole } from '../../common/enum';
import { Vehicle } from '../../vehicles/entities/vehicle.entity';

@ObjectType()
@Entity()
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  fullName: string;

  @Field()
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Field()
  @Column()
  email: string;

  @Field(() => UserRole)
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.user,
    nullable: true,
  })
  role: UserRole;

  @Field(() => Int, { nullable: true })
  @Column({ type: 'int', nullable: true })
  age: number | null;

  @Field(() => [Vehicle], { nullable: true })
  @OneToMany(() => Vehicle, (vehicle) => vehicle.driver, { nullable: true })
  vehicles?: Vehicle[];

  @Field(() => [Vehicle], { nullable: true })
  @OneToMany(() => Vehicle, (vehicle) => vehicle.conductor, { nullable: true })
  vehiclesAsConductor?: Vehicle[];
}

@ObjectType()
export class MinimalUser {
  @Field()
  fullName: string;
}
