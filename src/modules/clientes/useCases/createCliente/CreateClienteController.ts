import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClienteUseCase } from "./CreateClienteUseCase";

class CreateClienteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, sexo, idade, data_nascimento, cidade_id } = request.body;
    const createClienteUseCase = container.resolve(CreateClienteUseCase);

    const cliente = await createClienteUseCase.execute({
      nome,
      sexo,
      data_nascimento,
      idade,
      cidade_id
    });

    return response.status(201).json(cliente);
  }
}

export { CreateClienteController }