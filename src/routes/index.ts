import { Router } from 'express';

import animalsRouter from './animals.routes';
import adoptionsRouter from './adoptions.routes';
import resposibilityStatementRouter from './responsibilityStatement.routes'

const routes = Router();

routes.use('/animals', animalsRouter);

routes.use('/adoptions', adoptionsRouter);

routes.use('/responsibilityStatement', resposibilityStatementRouter)

export default routes;
