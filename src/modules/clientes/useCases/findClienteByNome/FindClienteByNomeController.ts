import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { FindClienteByNomeUseCase } from "./FindClienteByNomeUseCase";

class FindClienteByNomeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome } = request.params;

    const findClienteByNomeUseCase = container.resolve(FindClienteByNomeUseCase);
    const clientes = await findClienteByNomeUseCase.execute(String(nome));

    return response.status(200).json({clientes});
  }
}

export { FindClienteByNomeController }