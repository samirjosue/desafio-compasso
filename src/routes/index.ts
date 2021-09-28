import { Router } from "express";
import { cidadesRouter } from "./cidades.routes";
import { clientesRoutes } from "./clientes.routes";

const router = Router();

router.use("/cidades", cidadesRouter);
router.use("/clientes", clientesRoutes);

export { router }