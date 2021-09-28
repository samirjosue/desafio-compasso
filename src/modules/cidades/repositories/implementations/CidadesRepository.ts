import { getRepository, Repository } from "typeorm";
import { ICreateCidadeDTO } from "../../dtos/ICreateCidadeDTO";
import { Cidade } from "../../entities/Cidade"
import { ICidadesRepository } from "../ICidadesRepository";

class CidadesRepository implements ICidadesRepository {
  private repository: Repository<Cidade>;

  constructor (){
    this.repository = getRepository(Cidade);
  }

  async create({ nome, estado }: ICreateCidadeDTO): Promise<void> {
    const cidade = this.repository.create({
      nome,
      estado
    });

    await this.repository.save(cidade);
  } 

  async findByEstado(estado: string): Promise<Cidade[]> {
    return this.repository.find({where: { estado }})
  }

  async findByNome(nome: string): Promise<Cidade> {
    const cidade = this.repository.findOne({ where: { nome }})
    return cidade;
  }

  async findById(id: number): Promise<Cidade> {
    return this.repository.findOne({ id });
  }

}

export { CidadesRepository }