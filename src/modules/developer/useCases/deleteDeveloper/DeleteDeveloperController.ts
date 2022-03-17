import { Request, Response } from 'express';
import { DeleteDeveloperUseCase } from './DeleteDeveloperUseCase';

export class DeleteDeveloperController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteDeveloperUseCase = new DeleteDeveloperUseCase();
    await deleteDeveloperUseCase.execute(id);
    return response.send();
  }
}