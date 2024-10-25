import {z} from 'zod';
// import {userSelectDb} from '../../types/user';

export const getUserInput = z.object({
  params: z.object({
    id: z.number(),
  }),
});

// export type GetUserOutput = z.infer<typeof userSelectDb>;