import User from '../../controllers/user';

describe('getUser', () => {
  jest.setTimeout(60000);
  beforeAll(async () => {
    console.log('begin of test');
  });

  afterAll(async () => {
    console.log('end of test');
  });

  it('test to get user', async () => {
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
