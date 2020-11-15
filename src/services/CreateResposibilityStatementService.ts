import { getRepository } from 'typeorm';
import ResponsibilityStatement from '../models/ResponsibilityStatement';

interface Request {
    statement: string;
}

class CreateResposibilityStatementService {

    public async execute({statement}: Request): Promise<ResponsibilityStatement> {
        
        const responsibilityStatementRepository = getRepository(ResponsibilityStatement);
        
        const responsibilityStatement = responsibilityStatementRepository.create({statement});

        await responsibilityStatementRepository.save(responsibilityStatement);

        return responsibilityStatement;
    }
}

export default CreateResposibilityStatementService;