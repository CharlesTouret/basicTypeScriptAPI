import {Request, Response, NextFunction} from 'express';
import * as jwt from 'jsonwebtoken';
import {env} from '../../utils/constants';

export interface AuthRequest extends Request {
  user: any;
}

export const auth =
  () => (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const decodedToken = getDecodedToken(req);
      if (decodedToken) {
        req.user = decodedToken;
        return next();
      } else {
        return res.status(401).send('UNAUTHORIZED');
      }
    } catch (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  };

function getDecodedToken(req: Request): string | boolean | jwt.JwtPayload {
  try {
    const {authorization} = req.headers;
    if (!authorization || !authorization.includes('Bearer ')) return false;
    const token = authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, env.secretKey);
    return decodedToken;
  } catch (err) {
    console.log(err);
    return false;
  }
}
