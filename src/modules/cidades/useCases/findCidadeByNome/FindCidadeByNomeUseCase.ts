import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { Cidade } from "../../entities/Cidade";
import { ICidadesRepository } from "../../repositories/ICidadesRepository";

@injectable()
class FindCidadeByNomeUseCase {
  constructor(
    @inject("CidadesRepository")
    private cidadesRepository: ICidadesRepository
  ){}

  async execute(nome: string): Promise<Cidade> {
    const cidade = await this.cidadesRepository.findByNome(nome);
    if(!cidade){
      throw new AppError("Nenhuma cidade encontrada!", 200);
    }

    return cidade;
  }
}

export { FindCidadeByNomeUseCase }