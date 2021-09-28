import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { Cidade } from "../../entities/Cidade";
import { ICidadesRepository } from "../../repositories/ICidadesRepository";

@injectable()
class FindCidadesByEstadoUseCase {
  constructor(
    @inject("CidadesRepository")
    private cidadesRepository: ICidadesRepository){ }
  
  async execute(estado: string): Promise<Cidade[]>{
    const cidades = await this.cidadesRepository.findByEstado(estado);

    if(!estado){
      throw new AppError("Parametro inválido!", 400)
    }
    return cidades;
  }
}

export { FindCidadesByEstadoUseCase }