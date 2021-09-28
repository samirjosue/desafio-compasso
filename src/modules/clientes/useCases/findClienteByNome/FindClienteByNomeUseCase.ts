import { inject, injectable } from "tsyringe";
import { Cliente } from "../../entities/Cliente";
import { IClientesRepository } from "../../repositories/IClientesRepository";

@injectable()
class FindClienteByNomeUseCase {
  constructor(
    @inject("ClientesRepository")
    private clientesRepository: IClientesRepository
  ){}

  async execute(nome: string): Promise<Cliente[]>{
    const clientes = await this.clientesRepository.findByNome(nome);

    return clientes;
  }
}

export { FindClienteByNomeUseCase }