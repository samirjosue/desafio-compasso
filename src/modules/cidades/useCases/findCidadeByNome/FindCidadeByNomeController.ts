import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindCidadeByNomeUseCase } from "./FindCidadeByNomeUseCase";

class FindCidadeByNomeController {
  async handle(request: Request, response: Response): Promise<Response>{
    const { nome } = request.query;

    const findCidadeByNomeUseCase = container.resolve(FindCidadeByNomeUseCase);

    const cidade = await findCidadeByNomeUseCase.execute(String(nome));

    return response.status(200).json(cidade);
  }
}

export { FindCidadeByNomeController }