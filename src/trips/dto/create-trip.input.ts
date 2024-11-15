import { Field, Int, InputType } from '@nestjs/graphql';

@InputType()
export class DepartureArrivalInput {
  @Field()
  date: string;

  @Field()
  time: string;

  @Field()
  location: string;
}

@InputType()
export class CreateTripInput {
  @Field(() => DepartureArrivalInput)
  departure: DepartureArrivalInput;

  @Field(() => DepartureArrivalInput)
  arrival: DepartureArrivalInput;

  @Field(() => Int, { description: 'Estimated duration of the trip in hours' })
  estimatedDuration: number;

  @Field(() => Int)
  approxDistance: number;

  @Field(() => Int)
  fare: number;

  @Field(() => Int)
  vehicleId: number;
}

@InputType()
export class QueryTripArgs {
  @Field()
  id: number;
}