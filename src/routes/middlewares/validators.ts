import {Request, Response, NextFunction} from 'express';
import {AnyZodObject} from 'zod';

/**
 * @param schema The Zod Schema to compare to.
 * @returns next() if the parsing is succeful according to the schema or 400 Bad request if it's not.
 */
export const validateSchema =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsedSchema = schema.safeParse({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      if (!parsedSchema.success) {
        return res.status(400).send(parsedSchema.error);
      }
      return next();
    } catch (err) {
      console.log(err);
      return res.status(400).send(err);
    }
  };
