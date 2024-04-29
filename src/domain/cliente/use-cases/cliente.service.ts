import { Injectable } from '@nestjs/common';
import { UpdateClienteDto } from '../dto/update-cliente.dto';
import { Cliente } from '../entities/cliente.entity';
import { ClienteRepository } from '../repositories/cliente.repository';
import { CreateClienteDto } from '../dto/create-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClienteService {

  constructor(
    @InjectRepository(ClienteRepository)
    private clienteRepository: ClienteRepository,
  ) { }

  create(clientDto: CreateClienteDto): Promise<Cliente> {
    const cliente = new Cliente();
    Object.assign(cliente, clientDto);
    if (cliente.status === undefined) {
      cliente.status = true;
    }

    return this.clienteRepository.createClient(cliente);
  }

  async findAll(): Promise<Cliente[]> {
    return await this.clienteRepository.findAll()
  }

  async findById(id: number): Promise<Cliente | null> {
    const cliente = await this.clienteRepository.findById(id);
    if (!cliente) {
      throw new Error('Cliente not found');
    }
    return this.clienteRepository.findById(id);
  }

  async update(id: number, updateClienteDto: UpdateClienteDto): Promise<Cliente> {
    const cliente = await this.clienteRepository.findById(id);
    if (!cliente) {
      throw new Error('Cliente not found');
    }
    // Atualize a entidade com os novos valores
    Object.assign(cliente, updateClienteDto);
    return this.clienteRepository.updateClient(id, cliente);
  }

  async remove(id: number): Promise<void> {
    const result = await this.clienteRepository.delete(id);
    if (result.affected === 0) {
      throw new Error('No cliente was found to be deleted');
    }
  }
}
