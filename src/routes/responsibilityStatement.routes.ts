import { Request, Response, response, Router } from 'express';
import { getRepository } from 'typeorm';
import ResponsibilityStatement from '../models/ResponsibilityStatement';
import ReponsabilityStatement from '../models/ResponsibilityStatement';

import CreateResposibilityStatementService from '../services/CreateResposibilityStatementService';
import UpdateResposibilityStatementService from '../services/UpdateResponsibilityStatementService';

const responsibilityStatementRouter = Router();

responsibilityStatementRouter.get('/', async (request : Request, response : Response) => {
    const responsabilityStatements = getRepository(ReponsabilityStatement);

    const statements = await responsabilityStatements.find();

    return response.json(statements);
});

responsibilityStatementRouter.post('/', async (request : Request, response : Response) => {

    try {
        const { statement } = request.body;

        const statementService = new CreateResposibilityStatementService();

        const responsibilityStatement = await statementService.execute({
            statement
        });
    
        return response.json(responsibilityStatement);
    } 
    catch (error) {
        console.log(error);
    }
})

responsibilityStatementRouter.put('/:id', async (request : Request, response : Response) => {
    try {
        const { statement } = request.body;
        const { id } = request.params;

        const statementService = new UpdateResposibilityStatementService();

        const responsibilityStatement = statementService.execute({id, statement})
        
        return response.json(responsibilityStatement)

    } catch (error) {
        
    }
})

export default responsibilityStatementRouter;
