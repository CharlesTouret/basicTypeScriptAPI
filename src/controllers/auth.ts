import jwt from 'jsonwebtoken';
import {env} from '../utils/constants';
import * as firebaseAuth from 'firebase/auth';
import firebaseClient from './clients/firebase';
import {LoginOutput} from '../routes/validationSchemas/auth';

async function login(email: string, password: string): Promise<LoginOutput> {
  try {
    // #TODO: retrieve user from SupaBase and use a real value
    const user = {
      id: '12',
      Nom: 'Test',
      Prénom: 'Charles',
      Email: 'charl.touret@gmail.com',
    };
    const userId = user.id;
    const firebaseAuthClient = firebaseClient.getConnection();
    await firebaseAuth.signInWithEmailAndPassword(
      firebaseAuthClient,
      email,
      password
    );
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
      fullName: user.Nom + user['Prénom'],
      accessTokenExpiresIn: env.expiresIn,
      accessToken: accessToken,
    };
  } catch (error: any) {
    console.log(error);
    throw Error(LOGIN_CANNOT_LOG);
  }
}

// FUNCTION ERRORS
const LOGIN_CANNOT_LOG = 'CANNOT_LOG';

export default {
  login,
};
