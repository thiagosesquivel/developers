import { prisma } from "../../../../database/PrismaClient";


interface IUpdateDeveloper{
    id: string;
    name: string;
    email:string;
}


export class UpdateDeveloperUseCase {
    async execute({id, name, email} : IUpdateDeveloper) : Promise<IUpdateDeveloper> {
     
     const developer =  await prisma.developer.update({
          where:{ id},
          data:{
              name,
              email
          }
      });
  
      return developer;
    }
  }