import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/database.Module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trip } from './entities/trip.entity';
import { TripsResolver } from './trips.resolver';
import { TripsService } from './trips.service';
import { Vehicle } from '../vehicles/entities/vehicle.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Trip, Vehicle])],
  providers: [TripsResolver, TripsService],
})
export class TripsModule {}
