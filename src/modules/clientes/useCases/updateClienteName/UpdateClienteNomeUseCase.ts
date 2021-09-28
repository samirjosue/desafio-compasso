import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IClientesRepository } from "../../repositories/IClientesRepository";

@injectable()
class UpdateClienteNomeUseCase {
  constructor(
    @inject("ClientesRepository")
    private clientesRepository: IClientesRepository
  ){}

  async execute(id: number, nome: string): Promise<void> {
    const cliente = await this.clientesRepository.findById(id);
    if (!cliente){
      throw new AppError("Cliente não encontrado!")
    }

    await this.clientesRepository.updateNomeCliente(id, nome);
  }
}

export { UpdateClienteNomeUseCase }