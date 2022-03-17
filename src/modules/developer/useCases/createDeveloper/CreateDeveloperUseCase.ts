import { prisma } from "../../../../database/PrismaClient";

interface ICreateDeveloper{
    name: string;
    email:string;
}


export class CreateDeveloperUseCase {
    async execute({ name, email }: ICreateDeveloper) {
      const developerExists = await prisma.developer.findFirst({
        where: {
          email: {
            equals: email,
          },
        },
      });
  
      if (developerExists) {
        throw new Error('Developer already exists');
      }
    
      const client = await prisma.developer.create({
        data: {
          name,
          email,
        },
      });
  
      return client;
    }
  }