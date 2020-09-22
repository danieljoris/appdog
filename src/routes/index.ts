import { Router } from 'express';

import animalsRouter from './animals.routes';
import adoptionsRouter from './adoptions.routes';

const routes = Router();

routes.use('/animals', animalsRouter);

routes.use('/adoptions', adoptionsRouter);

export default routes;
