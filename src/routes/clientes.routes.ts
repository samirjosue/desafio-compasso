import { Router } from "express";
import { CreateClienteController } from "../modules/clientes/useCases/createCliente/CreateClienteController";
import { DeleteClienteController } from "../modules/clientes/useCases/deleteCliente/DeleteClienteController";
import { FindClienteByIdController } from "../modules/clientes/useCases/findClienteById/FindClienteByIdController";
import { FindClienteByNomeController } from "../modules/clientes/useCases/findClienteByNome/FindClienteByNomeController";
import { UpdateClienteNomeController } from "../modules/clientes/useCases/updateClienteName/UpdateClienteNomeController"
const clientesRoutes = Router();

const createClienteController = new CreateClienteController();
const findClienteByNomeController = new FindClienteByNomeController();
const findClienteByIdController = new FindClienteByIdController();
const deleteClienteController = new DeleteClienteController();
const updateClienteNomeController = new UpdateClienteNomeController();

clientesRoutes.post("/", createClienteController.handle);
clientesRoutes.get("/findByNome/:nome", findClienteByNomeController.handle);
clientesRoutes.get("/findById/:id", findClienteByIdController.handle);
clientesRoutes.delete("/delete/:id", deleteClienteController.handle);
clientesRoutes.put("/update/:id", updateClienteNomeController.handle);

export { clientesRoutes }