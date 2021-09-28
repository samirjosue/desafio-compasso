import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { FindClienteByIdUseCase } from "./FindClienteByIdUseCase";

class FindClienteByIdController {

  async handle(request: Request, response: Response): Promise<Response>{
    const { id } = request.params;

    if (request.params.id){
      const findClienteByIdUseCase = container.resolve(FindClienteByIdUseCase);

      const cliente = await findClienteByIdUseCase.execute(Number(id));
      return response.status(200).json(cliente);

    } else {
      throw new AppError("Parametro inválido!", 400);
    }
  }
}

export { FindClienteByIdController }