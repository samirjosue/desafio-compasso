import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ICidadesRepository } from "../../../cidades/repositories/ICidadesRepository";
import { ICreateClienteDTO } from "../../dtos/ICreateClienteDTO";
import { Cliente } from "../../entities/Cliente";
import { IClientesRepository } from "../../repositories/IClientesRepository";

@injectable()
class CreateClienteUseCase {
  constructor(
    @inject("ClientesRepository")
    private clientesRepository: IClientesRepository,
    @inject("CidadesRepository")
    private cidadesRepository: ICidadesRepository
  ){}

  async execute({ nome, sexo, data_nascimento, idade, cidade_id }: ICreateClienteDTO): Promise<Cliente>{

    const cidade = await this.cidadesRepository.findById(cidade_id);
    if(!cidade) {
      throw new AppError("Cidade inválida", 404);
    }

    const cliente = await this.clientesRepository.createCliente({
      nome,
      sexo,
      data_nascimento,
      idade,
      cidade_id
    });

    return cliente;
  }
}

export { CreateClienteUseCase }