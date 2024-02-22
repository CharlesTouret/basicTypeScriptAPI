import {z} from 'zod';

export const loginInput = z.object({
  body: z.object({
    email: z.string(),
    password: z.string(),
  }),
});

export const loginOutput = z.object({
  userId: z.string(),
  fullName: z.string(),
  accessTokenExpiresIn: z.string(),
  accessToken: z.string(),
});

export type LoginOutput = z.infer<typeof loginOutput>;
