import { InputType, Field, Int } from '@nestjs/graphql';
import { VehicleType } from '../../common/enum';
@InputType()
export class VehicleInfoInput {
  @Field()
  title: string;

  @Field()
  numberPlate: string;

  @Field()
  model: string;

  @Field()
  manufacturer: string;

  @Field()
  registrationDate: string;

  @Field(() => VehicleType)
  type: VehicleType;
}

@InputType()
export class CreateVehicleInput {
  @Field(() => VehicleInfoInput)
  info: VehicleInfoInput;

  @Field(() => Int, { nullable: true })
  driverId?: number;

  @Field(() => Int, { nullable: true })
  conductorId?: number;
}

@InputType()
export class QueryVehicleArgs {
  @Field()
  id: number;
}
