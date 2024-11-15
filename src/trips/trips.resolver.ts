import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TripsService } from './trips.service';
import { Trip } from './entities/trip.entity';
import { CreateTripInput, QueryTripArgs } from './dto/create-trip.input';
import { UpdateTripInput } from './dto/update-trip.input';

@Resolver(() => Trip)
export class TripsResolver {
  constructor(private readonly tripsService: TripsService) {}

  @Mutation(() => Trip)
  createTrip(@Args('createTripInput') createTripInput: CreateTripInput) {
    return this.tripsService.create(createTripInput);
  }

  @Query(() => [Trip], { name: 'trips' })
  findAll() {
    return this.tripsService.findAll();
  }

  @Query(() => Trip, { name: 'trip' })
  findOne(@Args('payload') payload: QueryTripArgs) {
    return this.tripsService.findOne(payload);
  }

  @Mutation(() => Int)
  updateTrip(@Args('updateTripInput') updateTripInput: UpdateTripInput) {
    return this.tripsService.update(updateTripInput);
  }

  @Mutation(() => Int)
  removeTrip(@Args('id', { type: () => Int }) id: number) {
    return this.tripsService.remove(id);
  }
}
