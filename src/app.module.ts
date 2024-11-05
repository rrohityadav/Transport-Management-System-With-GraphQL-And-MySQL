import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CommonModule } from './common/common.Module';

@Module({
  imports: [CommonModule, UsersModule],
})
export class AppModule {}
