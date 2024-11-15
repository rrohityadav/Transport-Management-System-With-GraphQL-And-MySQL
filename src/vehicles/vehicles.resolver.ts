import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VehiclesService } from './vehicles.service';
import { Vehicle } from './entities/vehicle.entity';
import {
  CreateVehicleInput,
  QueryVehicleArgs,
} from './dto/create-vehicle.input';
import { UpdateVehicleInfoInput } from './dto/update-vehicle.input';

@Resolver(() => Vehicle)
export class VehiclesResolver {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Mutation(() => Vehicle)
  createVehicle(
    @Args('createVehicleInput') createVehicleInput: CreateVehicleInput,
  ) {
    return this.vehiclesService.create(createVehicleInput);
  }

  @Query(() => [Vehicle], { name: 'vehicles' })
  findAll() {
    return this.vehiclesService.findAll();
  }

  @Query(() => Vehicle, { name: 'vehicle' })
  findOne(@Args('payload') payload: QueryVehicleArgs) {
    return this.vehiclesService.findOne(payload);
  }

  @Mutation(() => Int)
  updateVehicleInfo(
    @Args('updateVehicleInfoInput')
    updateVehicleInfoInput: UpdateVehicleInfoInput,
  ): Promise<number> {
    return this.vehiclesService.update(updateVehicleInfoInput);
  }

  @Mutation(() => Int)
  removeVehicle(@Args('id', { type: () => Int }) id: number) {
    return this.vehiclesService.remove(id);
  }
}
