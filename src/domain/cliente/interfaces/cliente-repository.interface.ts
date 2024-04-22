import { Cliente } from "../entities/cliente.entity";

export interface IClienteRepository {
  findAll(): Promise<Cliente[]>;
  findById(id: number): Promise<Cliente>;
  createClient(cliente: Cliente): Promise<Cliente>;
  updateClient(id: number, cliente: Cliente): Promise<Cliente>;
  deleteClient(id: number): Promise<void>;
}