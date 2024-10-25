import User from './user';
import jwt from 'jsonwebtoken';
import {AUTH_BAD_CREDENTIALS, AUTH_EMAIL_NOT_CONFIRMED, env, INTERNAL_SERVER_ERROR, NOT_FOUND, SUPABASE_INVALID_CREDENTIALS_ERROR, SUPABASE_NOT_CONFIRMED_EMAIL_ERROR} from '../utils/constants';
import {LoginOutput} from '../routes/validationSchemas/auth';
import { app } from './clients/supabase';

async function login(email: string, password: string): Promise<LoginOutput> {
  const {data, error} = await app.auth.signInWithPassword({
    email,
    password,
  });
  if (error?.message === SUPABASE_NOT_CONFIRMED_EMAIL_ERROR)
    throw new Error(AUTH_EMAIL_NOT_CONFIRMED);
  if (error?.message === SUPABASE_INVALID_CREDENTIALS_ERROR)
    throw new Error(AUTH_BAD_CREDENTIALS);
  const lowerCaseEmail = email.toLowerCase();
  const user = await User.getUseByEmail(lowerCaseEmail);
  const userId = user.id;
  const accessToken = jwt.sign(
    {
      userId,
    },
    env.secretKey,
    {
      algorithm: 'HS256',
      expiresIn: env.expiresIn,
    }
  );
  return {
    userId,
    name: user.name,
    accessTokenExpiresIn: env.expiresIn,
    accessToken: accessToken,
  };
}

export default {
  login,
};
