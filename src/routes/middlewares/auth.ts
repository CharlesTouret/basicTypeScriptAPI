import {Request, Response, NextFunction} from 'express';
import * as jwt from 'jsonwebtoken';
import {env} from '../../utils/constants';
import * as Sentry from '@sentry/node';
import {EnvironmentNamesEnum} from '../../utils/helpers';

export interface AuthRequest extends Request {
  user: any;
}

export const auth =
  (bypassAuth: boolean) =>
  (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const decodedToken = getDecodedToken(req);
      if (decodedToken) {
        req.user = decodedToken;
        if (
          env.environment === EnvironmentNamesEnum.STAGING ||
          env.environment === EnvironmentNamesEnum.PRODUCTION
        )
          // identify the user in Sentry
          Sentry.setUser({id: req.user.userId});
        return next();
      } else if (!bypassAuth) {
        return res.status(401).send('UNAUTHORIZED');
      }

      return next();
    } catch (err) {
      return next(err);
    }
  };

export function getDecodedToken(
  req: Request
): string | boolean | jwt.JwtPayload {
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
