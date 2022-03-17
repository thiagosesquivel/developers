import { prisma } from "../../../../database/PrismaClient";


export class DeleteDeveloperUseCase {
    async execute(id:string) : Promise<void> {
      await prisma.developer.delete({
          where:{
            id
          }
        });
  
      return ;
    }
  }