import {db} from '../controllers/clients/db';
import { env } from '../utils/constants';
// import {
//   users,
// } from '../models/db/schema'; // will be available after readme instructions executed
import {EnvironmentNamesEnum} from '../utils/helpers';

const BE_CAREFUL_NOT_IN_TEST = 'BE_CAREFUL_NOT_IN_TEST'

export const initDatabase = async () => {
  if (env.environment !== EnvironmentNamesEnum.TEST)
    throw BE_CAREFUL_NOT_IN_TEST;
  await emptyDatabase();
};

const emptyDatabase = async () => {
  // await db.delete(users);
};
