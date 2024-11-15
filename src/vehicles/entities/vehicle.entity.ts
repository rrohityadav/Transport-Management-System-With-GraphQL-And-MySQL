import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MinimalUser, User } from '../../users/entities/user.entity';
import { BaseStatus, VehicleType } from '../../common/enum';
import { IsDateString } from 'class-validator';
import { Trip } from '../../trips/entities/trip.entity';

@ObjectType()
export class VehicleInfo {
  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  numberPlate: string;

  @Field()
  @Column()
  model: string;

  @Field()
  @Column()
  manufacturer: string;

  @Field(() => String)
  @Column()
  @IsDateString()
  registrationDate: string;

  @Field(() => VehicleType)
  @Column({
    type: 'enum',
    enum: VehicleType,
  })
  type: VehicleType;
}

@ObjectType()
@Entity()
export class Vehicle {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => VehicleInfo)
  @Column(() => VehicleInfo)
  info: VehicleInfo;

  @Field(() => MinimalUser, { nullable: true })
  @ManyToOne(() => User, (user) => user.vehicles, { nullable: true })
  driver?: User;

  @Field(() => MinimalUser, { nullable: true })
  @ManyToOne(() => User, (user) => user.vehiclesAsConductor, { nullable: true })
  conductor?: User;

  @OneToMany(() => Trip, (trip) => trip.vehicle, { onDelete: 'CASCADE' })
  trips: Trip[];

  @Field(() => BaseStatus)
  @Column({
    type: 'enum',
    enum: BaseStatus,
    default: BaseStatus.active,
  })
  status: BaseStatus;
}
