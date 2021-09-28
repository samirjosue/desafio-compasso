import "reflect-metadata";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCidadeUseCase } from "./CreateCidadeUseCase";


class CreateCidadeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, estado } = request.body;

    const createCidadeUseCase = container.resolve(CreateCidadeUseCase);

    await createCidadeUseCase.execute({ nome, estado });

    return response.status(201).send();
  }
}

export { CreateCidadeController }