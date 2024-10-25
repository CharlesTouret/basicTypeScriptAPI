import express, {NextFunction, Response, Request} from 'express';
const router = express.Router();
import Auth from '../controllers/auth';
import {loginInput} from './validationSchemas/auth';
import {validateSchema} from './middlewares/validators';
import { AUTH_BAD_CREDENTIALS, AUTH_EMAIL_NOT_CONFIRMED, NOT_FOUND } from '../utils/constants';

router.post(
  '/signin',
  [validateSchema(loginInput)],
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const loginResponse = await Auth.login(req.body.email, req.body.password);
      return res.status(200).send(loginResponse);
    } 
    catch (err: any) {
      if (
        err.message === AUTH_BAD_CREDENTIALS ||
        err.message === NOT_FOUND ||
        err.message === AUTH_EMAIL_NOT_CONFIRMED
      )
        return res.status(404).send({error: err.message});
      return next(err);
    }
  }
);

export default router;
