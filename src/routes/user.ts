import express, {Response} from 'express';
const router = express.Router();
import User from '../controllers/user';
import {getUserCalendarsInput} from './validationSchemas/user';
import {validateSchema} from './middlewares/validators';
import {AuthRequest, auth} from './middlewares/auth';

router.get(
  '/',
  //@ts-ignore
  [auth(), validateSchema(getUserCalendarsInput)],
  async (req: AuthRequest, res: Response) => {
    try {
      const user = await User.getUserFromId(req.user.userId);
      return res.status(200).send(user);
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .send({ok: false, code: 'SERVER_ERROR', error: 'error'});
    }
  }
);

export default router;
