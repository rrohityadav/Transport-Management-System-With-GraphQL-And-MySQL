import { Module } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { DriversResolver } from './drivers.resolver';

@Module({
  providers: [DriversResolver, DriversService],
})
export class DriversModule {}
