import { Router } from 'express';

import appointmentsRoutes from './appointments.routes';
import usersRoutes from './users.routes';

const routes = Router();

routes.use('/appointments', appointmentsRoutes);
routes.use('/users', usersRoutes);

routes.get('/', (request, response) =>
  response.json({ message: 'Hello node and typescript' }),
);
export default routes;
