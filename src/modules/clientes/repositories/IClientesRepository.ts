import { ICreateClienteDTO } from "../dtos/ICreateClienteDTO";
import { Cliente } from "../entities/Cliente";

interface IClientesRepository {
  createCliente(data : ICreateClienteDTO): Promise<Cliente>;
  findByNome(nome: string): Promise<Cliente[]>;
  findById(id: number): Promise<Cliente>;
  deleteCliente(id: number): Promise<void>;
  updateNomeCliente(id: number, nome: string): Promise<void>;
}

export { IClientesRepository }