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
        query: decodeQueryAndParamsUriStrings(req.query),
        params: decodeQueryAndParamsUriStrings(req.params),
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

// thanks to this method we can provides value with blank spaces in query and params parameters
const decodeQueryAndParamsUriStrings = (queryOrParamObject: any) => {
  const decodedObject: any = {};
  for (const key of Object.keys(queryOrParamObject)) {
    decodedObject[key] = decodeURIComponent(queryOrParamObject[key]);
  }
  return decodedObject;
};
