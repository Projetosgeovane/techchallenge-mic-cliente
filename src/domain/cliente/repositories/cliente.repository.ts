import { EntityRepository, Repository } from "typeorm";
import { Cliente } from "../entities/cliente.entity";
import { IClienteRepository } from "../interfaces/cliente-repository.interface";
import { InjectRepository } from "@nestjs/typeorm";

@EntityRepository(Cliente)
export class ClienteRepository extends Repository<Cliente> implements IClienteRepository {

  constructor(
    @InjectRepository(Cliente)
    private clientRepository: Repository<Cliente>
  ) {
    super(clientRepository.target, clientRepository.manager, clientRepository.queryRunner);
  }
  async findAll(): Promise<Cliente[]> {
    return this.find();
  }

  findById(id: number): Promise<Cliente> {
    return this.findOne({ where: { id } });
  }

  createClient(cliente: Cliente): Promise<Cliente> {
    return this.save(cliente);
  }

  updateClient(id: number, cliente: Cliente): Promise<Cliente> {
    return this.save({ ...cliente, id });
  }

  async deleteClient(id: number): Promise<void> {
    await this.delete(id);
  }
}