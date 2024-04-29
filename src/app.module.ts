import { Module } from '@nestjs/common';
import { ClienteModule } from './domain/cliente/cliente.module';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule, ClienteModule],
})
export class AppModule { }
