import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CommonModule } from './common/common.Module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CommonModule, UsersModule, AuthModule],
})
export class AppModule {}
