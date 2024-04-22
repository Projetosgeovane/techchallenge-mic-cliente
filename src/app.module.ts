import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './domain/cliente/cliente.module';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule, ClienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
