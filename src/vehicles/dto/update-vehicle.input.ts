import { InputType, Field, Int } from '@nestjs/graphql';
import { VehicleInfoInput } from './create-vehicle.input';

@InputType()
export class UpdateVehicleInfoInput {
  @Field(() => Int)
  id: number;

  @Field(() => VehicleInfoInput)
  info: VehicleInfoInput;
}
