import { prisma } from "../../../../database/PrismaClient";



export class ShowDeveloperUseCase {
    async execute(id : string) {
     
        if(id)
        {
            const developer =  await prisma.developer.findFirst({
                where:{ id}
            });
        
            return developer;
        }

        const developers = await prisma.developer.findMany();
        return developers;
    }
  }