import {z} from 'zod';

export const getEndpointsOutput = z.array(
  z.object({
    path: z.string(),
    methods: z.array(z.string()),
  })
);
export type GetEndpointsOutput = z.infer<typeof getEndpointsOutput>;
