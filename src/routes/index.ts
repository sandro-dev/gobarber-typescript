import { Router } from 'express';

import appointmentsRoutes from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRoutes);

routes.get('/', (request, response) =>
  response.json({ message: 'Hello node and typescript' }),
);
export default routes;
