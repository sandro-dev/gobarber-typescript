import { Router } from 'express';
import multer from 'multer';
import CreateUserService from '../services/CreateUserService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import uploadConfig from '../config/upload';

const upload = multer(uploadConfig);

const usersRoutes = Router();

usersRoutes.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  (request, response) => {
    return response.json({ ok: true, file: request.file });
  },
);

export default usersRoutes;
