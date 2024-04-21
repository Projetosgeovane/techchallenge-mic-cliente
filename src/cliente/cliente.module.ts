import { Module } from '@nestjs/common';
import { ClienteService } from './use-cases/cliente.service';
import { ClienteController } from './cliente.controller';

@Module({
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule {}
