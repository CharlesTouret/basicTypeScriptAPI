import express, {Response, NextFunction} from 'express';
const router = express.Router();
import User from '../controllers/user';
import {getUserInput} from './validationSchemas/user';
import {validateSchema} from './middlewares/validators';
import {AuthRequest, auth} from './middlewares/auth';
import { NOT_FOUND } from '../utils/constants';

router.get(
  '/:userId',
  //@ts-ignore
  [auth(), validateSchema(getUserInput)],
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      //@ts-ignore
      const user = await User.getUserFromId(req.params.userId); // we should type user with GetUserOutput after we will have follow the readme
      return res.status(200).send(user);
    } catch (err: any) {
      if (
        err.message === NOT_FOUND
      )
        return res.status(404).send({error: err.message});
      return next(err);
    }
  }
);

export default router;
