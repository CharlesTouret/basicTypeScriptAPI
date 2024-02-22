import {z} from 'zod';

export const getUserCalendarsInput = z.object({});

export const getUserCalendarsOutput = z.array(
  z.object({
    'lien vers vu': z.string(),
    Nom: z.string(),
  })
);
export type GetUserCalendarsOutput = z.infer<typeof getUserCalendarsOutput>;
