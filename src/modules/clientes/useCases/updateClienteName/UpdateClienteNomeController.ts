import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateClienteNomeUseCase } from "./UpdateClienteNomeUseCase"

class UpdateClienteNomeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { nome } = request.body;

    const updateClienteNomeUseCase = container.resolve(UpdateClienteNomeUseCase);
    await updateClienteNomeUseCase.execute(Number(id), nome);

    return response.send();
  }
}

export { UpdateClienteNomeController }