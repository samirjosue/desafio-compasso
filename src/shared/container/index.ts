import { container } from "tsyringe";
import { ICidadesRepository } from "../../modules/cidades/repositories/ICidadesRepository";
import { CidadesRepository } from "../../modules/cidades/repositories/implementations/CidadesRepository";
import { IClientesRepository } from "../../modules/clientes/repositories/IClientesRepository";
import { ClientesRepository } from "../../modules/clientes/repositories/implementations/ClientesRepository";

container.registerSingleton<ICidadesRepository>(
  "CidadesRepository",
  CidadesRepository
);

container.registerSingleton<IClientesRepository>(
  "ClientesRepository",
  ClientesRepository
);