import express from 'express';
const router = express.Router();
import Auth from '../controllers/auth';
import {loginInput} from './validationSchemas/auth';
import {validateSchema} from './middlewares/validators';

router.post(
  '/signin',
  [validateSchema(loginInput)],
  async (req: any, res: any) => {
    try {
      const loginResponse = await Auth.login(req.body.email, req.body.password);
      return res.status(200).send(loginResponse);
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .send({ok: false, code: 'SERVER_ERROR', error: 'error'});
    }
  }
);

export default router;
