import { Router } from "express";
import { CreateCidadeController } from "../modules/cidades/useCases/createCidade/CreateCidadeController";
import { FindCidadesByEstadoController } from "../modules/cidades/useCases/findCidadeByEstado/FindCidadesByEstadoController";
import { FindCidadeByNomeController } from "../modules/cidades/useCases/findCidadeByNome/FindCidadeByNomeController";

const cidadesRouter = Router();

const createCidadeController = new CreateCidadeController();
const findCidadesByEstadoController = new FindCidadesByEstadoController();
const findCidadeByNomeController = new FindCidadeByNomeController();

cidadesRouter.post("/", createCidadeController.handle);
cidadesRouter.get("/findByEstado/:estado", findCidadesByEstadoController.handle);
cidadesRouter.get("/findByNome/:nome", findCidadeByNomeController.handle);

export { cidadesRouter }