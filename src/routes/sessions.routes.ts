import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRoutes = Router();

sessionsRoutes.post('/', async (request, response) => {
  const { email, password } = request.body;

  const autheticateUser = new AuthenticateUserService();

  const { user, token } = await autheticateUser.execute({ email, password });

  return response.json({ user, token });
});

export default sessionsRoutes;
