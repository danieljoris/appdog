import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import ResponsibilityStatement from '../models/ResponsibilityStatement';

interface Request {
    id: string;
    statement: string;
}

class UpdateResposibilityStatementService {

    public async execute({id, statement}: Request): Promise<ResponsibilityStatement> {
        
        const responsibilityStatementRepository = getRepository(ResponsibilityStatement);
        
        const responsibilityStatement = await responsibilityStatementRepository.findOne(id);

        if(!responsibilityStatement){
            throw new AppError("Termo de responsabilidade não encontrado.");
        }

        responsibilityStatement.statement = statement;

        await responsibilityStatementRepository.save(responsibilityStatement)

        return responsibilityStatement;
    }
}

export default UpdateResposibilityStatementService;