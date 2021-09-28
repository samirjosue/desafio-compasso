import { inject, injectable } from "tsyringe";
import { ICidadesRepository } from "../../repositories/ICidadesRepository";
import { ICreateCidadeDTO } from "../../dtos/ICreateCidadeDTO";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateCidadeUseCase {
  constructor(
    @inject("CidadesRepository")
    private cidadeRepository: ICidadesRepository
  ){}

  async execute({ nome, estado }: ICreateCidadeDTO): Promise<void> {
    const cidade = await this.cidadeRepository.findByNome(nome);
    if (cidade && cidade.estado === estado) {
      throw new AppError("Cidade já cadastrada!")
    }
    await this.cidadeRepository.create({
      nome,
      estado
    });    
  }

}

export { CreateCidadeUseCase }