// import {UserSelectDb} from '../types/user';
// import {users} from '../models/db/schema';
import { NOT_FOUND } from "../utils/constants";
import { db } from "./clients/db";

const getUseByEmail = async (email: string): Promise<any> => { 
  // we should type the return with UserSelectDb when we will have follow readme.md  ## Generate drizzle model types to update ORM types
  // we must request SupaBase to retrieve the user
  // const result = await db
  //   .select()
  //   .from(users)
  //   .where(eq(users.id, id));

  // we mock the result for the moment
  const result = [{
    id: '12',
    Nom: 'Test',
    Prénom: 'Charles',
    Email: 'charl.touret@gmail.com',
  }];
  if (result.length === 0) throw new Error(NOT_FOUND);
  return result[0];
};

const getUserFromId = async (id: number): Promise<any> => { 
  // we should type the return with UserSelectDb when we will have follow readme.md  ## Generate drizzle model types to update ORM types
  // we must request SupaBase to retrieve the user
  // const result = await db
  //   .select()
  //   .from(users)
  //   .where(eq(users.id, id));

  // we mock the result for the moment
  const result = [{
    id: '12',
    Nom: 'Test',
    Prénom: 'Charles',
    Email: 'charl.touret@gmail.com',
  }];
  if (result.length === 0) throw new Error(NOT_FOUND);
  return result[0];
};

export default {
  getUseByEmail,
  getUserFromId
};
