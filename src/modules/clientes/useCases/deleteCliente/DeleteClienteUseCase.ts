import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IClientesRepository } from "../../repositories/IClientesRepository";

@injectable()
class DeleteClienteUseCase {
  constructor(
    @inject("ClientesRepository")
    private clientesRepository: IClientesRepository
  ){}

  async execute(id: number): Promise<void> {
    const cliente = await this.clientesRepository.findById(id);
    if (!cliente){
      throw new AppError("Cliente não encontrado!")
    }

    await this.clientesRepository.deleteCliente(id);
  }
}

export { DeleteClienteUseCase }