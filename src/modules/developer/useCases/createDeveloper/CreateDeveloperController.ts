import { Request, Response } from 'express';
import { CreateDeveloperUseCase } from './CreateDeveloperUseCase';

export class CreateDeveloperController {
  async handle(request: Request, response: Response) {
    const { name, email } = request.body;

    const createDeveloperUseCase = new CreateDeveloperUseCase();
    try{
      const result = await createDeveloperUseCase.execute({
        name,
        email, 
      });
      return response.json(result);
    }catch(err){
      return response.status(400).json({message:'Developer already exists'})
    }

  }
}