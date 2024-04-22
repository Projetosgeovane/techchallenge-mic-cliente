import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    senha: string;
    status: boolean;
}
