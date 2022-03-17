import { Request, Response, NextFunction } from 'express';
import { prisma } from '../database/PrismaClient';

interface IDeveloper{
    id:string;
    name:string;
    email:string;
}

interface IRequest extends Request{
    developer: IDeveloper
}

export async function verifyIfDeveloperExists(
    request: IRequest,
    response: Response,
    next: NextFunction
){
    const {id} = request.params;
    const developerExists =  await prisma.developer.findFirst({
        where:{
            id
        }
    });

    if(!developerExists){
        return response.status(404).json({message:"User not found"});
    }

    request.developer = developerExists;

    return next();
}