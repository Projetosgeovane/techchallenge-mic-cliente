import { Module } from '@nestjs/common';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './use-cases/cliente.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteRepository } from './repositories/cliente.repository';
import { Cliente } from './entities/cliente.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cliente]),
  ],
  controllers: [ClienteController],
  providers: [ClienteService, ClienteRepository],
})
export class ClienteModule { }
