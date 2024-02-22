import express, {Response} from 'express';
const router = express.Router();
import Activity from '../controllers/activity';
import {
  GetActivitiesOutput,
  getActivityAvaibilitiesInput,
  GetActivityAvaibilitiesInput,
  GetActivityAvaibilitiesOutput,
} from './validationSchemas/activity';
import {validateSchema} from './middlewares/validators';
import {AuthRequest, auth} from './middlewares/auth';

router.get(
  '/',
  //@ts-ignore
  [auth()],
  async (req: AuthRequest, res: Response) => {
    try {
      // #TODO: code the function below that will return an object of type getActivitiesOutput
      const activities: GetActivitiesOutput = await Activity.getAllActivities();
      return res.status(200).send(activities);
    } catch (err) {
      console.log(err);
      return res.status(500).send({error: 'Internal Server Error'});
    }
  }
);

router.get(
  '/avaibilities/:activityId',
  //@ts-ignore
  [auth(), validateSchema(getActivityAvaibilitiesInput)],
  async (req: AuthRequest, res: Response) => {
    try {
      const params: GetActivityAvaibilitiesInput = {
        activityId: req.params.activityId,
      };
      // #TODO: code the function below that will return an object of type GetActivityAvaibilitiesOutput
      const avaibilities: GetActivityAvaibilitiesOutput =
        await Activity.getAvaibilitiesForAnActivity(Number(params.activityId));
      return res.status(200).send(avaibilities);
    } catch (err) {
      console.log(err);
      return res.status(500).send({error: 'Internal Server Error'});
    }
  }
);

export default router;
