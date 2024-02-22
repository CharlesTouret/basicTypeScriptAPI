import {User} from '../models/database';

const getUserFromId = async (id: string): Promise<User> => {
  // we must request SupaBase to retrieve the user
  const user = {
    id: '12',
    Nom: 'Test',
    Prénom: 'Charles',
    Email: 'charl.touret@gmail.com',
  };
  return user;
};

export default {
  getUserFromId,
};
