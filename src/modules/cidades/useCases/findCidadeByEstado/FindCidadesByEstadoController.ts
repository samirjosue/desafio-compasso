import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindCidadesByEstadoUseCase } from "./FindCidadesByEstadoUseCase";

class FindCidadesByEstadoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { estado } = request.query;
    
    const findCidadesByEstadoUseCase = container.resolve(FindCidadesByEstadoUseCase);

    const cidades = await findCidadesByEstadoUseCase.execute(String(estado))

    return response.status(200).json({ cidades })
    
  }
}

export { FindCidadesByEstadoController }