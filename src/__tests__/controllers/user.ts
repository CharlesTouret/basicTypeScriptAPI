import {EnvironmentNamesEnum} from '../../utils/helpers';
// Mock the entire env module, really important !
jest.mock('../../utils/constants', () => {
  // Import the actual module using jest.requireActual()
  const actualConstants = jest.requireActual('../../utils/constants');

  return {
    // Mock the `env` variable with a new value
    ...actualConstants,
    env: {
      port: 3000,
      secretKey: 'salut',
      expiresIn: '10h',
      supabaseUrl: 'http://localhost:54321',
      supabaseKey: 'super-secret-jwt-token-with-at-least-32-characters-long',
      databaseUrl: 'postgresql://postgres:postgres@127.0.0.1:54322/postgres',
      reactAppUrl: 'http://localhost:3001',
      sentryLink: 'salut',
      supabaseClientBucketUrl: 'http://127.0.0.1:54324',
      environment: EnvironmentNamesEnum.TEST,
    },
  };
});

import {initDatabase} from '../utils';

describe('getUser', () => {
  jest.setTimeout(60000);
  beforeAll(async () => {
    await initDatabase();
    console.log('begin of test');
  });

  afterAll(async () => {
    console.log('end of test');
  });

  it('test to get user', async () => { // useless test but just to have an example
    const user = {
      Nom: 'Test',
      Prénom: 'Charles',
      Email: 'charl.touret@gmail.com',
    };
    expect(JSON.stringify(user)).toEqual(
      JSON.stringify({
        Nom: 'Test',
        Prénom: 'Charles',
        Email: 'charl.touret@gmail.com',
      })
    );
  });
});
