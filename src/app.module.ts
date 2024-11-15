import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CommonModule } from './common/common.Module';
import { AuthModule } from './auth/auth.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { TripsModule } from './trips/trips.module';

@Module({
  imports: [CommonModule, UsersModule, AuthModule, VehiclesModule, TripsModule],
})
export class AppModule {}
