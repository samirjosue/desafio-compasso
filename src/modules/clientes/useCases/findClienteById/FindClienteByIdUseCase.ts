import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { Cliente } from "../../entities/Cliente";
import { IClientesRepository } from "../../repositories/IClientesRepository";

@injectable()
class FindClienteByIdUseCase {

  constructor(
    @inject("ClientesRepository")
    private clientesRepository: IClientesRepository
  ){}

  async execute(id: number): Promise<Cliente> {
    const cliente = await this.clientesRepository.findById(id);
    if (!cliente) {
      throw new AppError("Cliente não encontrado!", 404)
    }
    return cliente;
  }

}

export { FindClienteByIdUseCase }