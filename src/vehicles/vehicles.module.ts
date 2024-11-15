import { Module } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehiclesResolver } from './vehicles.resolver';
import { DatabaseModule } from '../common/database.Module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Vehicle, User])],
  providers: [VehiclesResolver, VehiclesService],
})
export class VehiclesModule {}
