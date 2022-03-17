import { Request, Response } from 'express';
import { ShowDeveloperUseCase } from './ShowDeveloperUseCase';

export class ShowDeveloperController {
  async handle(request: Request, response: Response) {
    const {id} = request.params;

    const showDeveloperUseCase = new ShowDeveloperUseCase();
    const result =  await showDeveloperUseCase.execute(id);   
    return response.json(result);
  }
}