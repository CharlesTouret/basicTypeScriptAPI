import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import rateLimit from 'express-rate-limit';
import './controllers/clients/sentry';
import AuthRouter from './routes/auth';
import UserRouter from './routes/user';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './utils/swagger.json';
import { EnvironmentNamesEnum } from './utils/helpers';
import * as Sentry from '@sentry/node';
import { env, INTERNAL_SERVER_ERROR } from './utils/constants';

const app = express();
const port = env.port;

const apiLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 4000, // Limit each IP to 4000 requests per `window` (here, per 5 minutes)
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '10mb'}));

app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/auth', apiLimiter, AuthRouter);
app.use('/user', apiLimiter, UserRouter);

// config sentry to catch 500 errors from our routes
if (
  env.environment === EnvironmentNamesEnum.STAGING ||
  env.environment === EnvironmentNamesEnum.PRODUCTION
) {
  Sentry.setupExpressErrorHandler(app);
}

// middleware to catch 500 errors from our routes and send them to sentry to create issue
app.use((err: any, req: any, res: any, next: any) => {
  console.log(err);
  res.statusCode = 500;
  return res.status(500).send(INTERNAL_SERVER_ERROR);
});

app.listen(port, () => {
  console.log(`Welcome to basicTypeScript API, listenning on port :${port}.`);
});
