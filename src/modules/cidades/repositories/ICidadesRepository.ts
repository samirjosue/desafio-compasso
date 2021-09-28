import { ICreateCidadeDTO } from "../dtos/ICreateCidadeDTO";
import { Cidade } from "../entities/Cidade";

interface ICidadesRepository {
  create({ nome, estado }: ICreateCidadeDTO): Promise<void>;
  findByEstado(estado: string): Promise<Cidade[]>;
  findByNome(nome: string): Promise<Cidade>;
  findById(id: number): Promise<Cidade>;
}

export { ICidadesRepository }