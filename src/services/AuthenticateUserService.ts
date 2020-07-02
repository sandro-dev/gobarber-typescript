import { compare } from 'bcryptjs';
import { getRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import User from '../models/User';

import authConfig from '../config/auth';

interface Request {
  email: string;
  password: string;
}
interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new Error('Email and/or password combination is invalid 1');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Email and/or password combination is invalid 2');
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      expiresIn,
      subject: user.id,
    });

    delete user.password;

    return { user, token };
  }
}

export default AuthenticateUserService;
