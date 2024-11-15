import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Vehicle } from '../../vehicles/entities/vehicle.entity';
import { BaseStatus } from '../../common/enum';
import { BaseSchema } from '../../common/base.entity';

@ObjectType()
export class DepartureArrival {
  @Field()
  @Column()
  date: string;

  @Field()
  @Column()
  time: string;

  @Field()
  @Column()
  location: string;
}

@ObjectType()
@Entity()
export class Trip extends BaseSchema {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => DepartureArrival)
  @Column(() => DepartureArrival)
  departure: DepartureArrival;

  @Field(() => DepartureArrival)
  @Column(() => DepartureArrival)
  arrival: DepartureArrival;

  @Field(() => Int, { description: 'Estimated duration of the trip in hours' })
  @Column()
  estimatedDuration: number;

  @Field(() => Int)
  @Column()
  approxDistance: number;

  @Field(() => Int)
  @Column()
  fare: number;

  @Field(() => Vehicle)
  @JoinColumn()
  @ManyToOne(() => Vehicle, (vehicle) => vehicle.trips, { onDelete: 'CASCADE' })
  vehicle: Vehicle;

  @Field(() => BaseStatus)
  @Column({
    type: 'enum',
    enum: BaseStatus,
    default: BaseStatus.active,
  })
  status: BaseStatus;
}
