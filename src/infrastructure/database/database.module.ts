import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cliente } from "src/domain/cliente/entities/cliente.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '123456',
            database: 'client',
            entities: [Cliente],
            synchronize: true,
            logging: true
        })

    ]
})

export class DatabaseModule { }