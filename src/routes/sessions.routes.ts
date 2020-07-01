import { Router } from 'express';

const sessionsRoutes = Router();

sessionsRoutes.post('/', async (request, response) => {
  try {
    return response.json({ ok: true });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessionsRoutes;
