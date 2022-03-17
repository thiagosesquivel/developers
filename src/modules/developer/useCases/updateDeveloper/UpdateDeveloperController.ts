import { Request, Response } from 'express';
import { UpdateDeveloperUseCase } from './UpdateDeveloperUseCase';

export class UpdateDeveloperController {
  async handle(request: Request, response: Response) {
    const {id} = request.params;
    const { name, email } = request.body;

    const updateDeveloperUseCase = new UpdateDeveloperUseCase();
    const result = await updateDeveloperUseCase.execute({
      id,
      name,
      email, 
    });

    return response.json(result);
  }
}