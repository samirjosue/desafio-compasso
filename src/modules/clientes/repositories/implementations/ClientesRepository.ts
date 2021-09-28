import { getRepository, Repository } from "typeorm";
import { ICreateClienteDTO } from "../../dtos/ICreateClienteDTO";
import { Cliente } from "../../entities/Cliente";
import { IClientesRepository } from "../IClientesRepository";

class ClientesRepository implements IClientesRepository{
  private repository: Repository<Cliente>

  constructor () {
    this.repository = getRepository(Cliente);
  }

  async createCliente({ nome, sexo, idade, data_nascimento, cidade_id }: ICreateClienteDTO): Promise<Cliente> {
    const cliente = this.repository.create({
      nome,
      sexo,
      data_nascimento,
      idade,
      cidade_id
    });

    await this.repository.save(cliente);

    return cliente;
  }

  async findByNome(nome: string): Promise<Cliente[]> {
    return await this.repository.find({ where: {nome}});
  }

  async findById(id: number): Promise<Cliente> {
    return await this.repository.findOne(id);
  }

  async deleteCliente(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async updateNomeCliente(id: number, nome: string): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update()
      .set({ nome })
      .where("id = :id")
      .setParameters({ id })
      .execute();

  }

}

export { ClientesRepository }