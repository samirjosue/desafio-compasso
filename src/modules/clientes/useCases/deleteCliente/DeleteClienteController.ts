import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteClienteUseCase } from "./DeleteClienteUseCase";

class DeleteClienteController {
  async handle(request: Request, response: Response): Promise<Response>{
    const { id } = request.params;
    const deleteClienteUseCase = container.resolve(DeleteClienteUseCase);

    await deleteClienteUseCase.execute(Number(id));

    return response.status(200).send();
  }}

export { DeleteClienteController }