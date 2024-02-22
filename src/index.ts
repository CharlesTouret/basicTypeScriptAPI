import express, {Response} from 'express';
import dotenv from 'dotenv';
dotenv.config();
import AuthRouter from './routes/auth';
import ActivityRouter from './routes/activity';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import listEndpoints from 'express-list-endpoints';
import {AuthRequest, auth} from './routes/middlewares/auth';
import {GetEndpointsOutput} from './routes/validationSchemas';

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.use('/auth', AuthRouter);
app.use('/activities', ActivityRouter);

app.get(
  '/', //@ts-ignore
  // auth(),
  async (req: AuthRequest, res: Response) => {
    return res
      .status(200)
      .send('Welcome to Hopleisure´s middleware API server');
  }
);

app.get(
  '/endpoints', //@ts-ignore
  // auth(),
  async (req: AuthRequest, res: Response) => {
    const endpoints = listEndpoints(app);
    const formattedEndpoints: GetEndpointsOutput = endpoints.map(item => {
      return {path: item.path, methods: item.methods};
    });
    return res.status(200).send(formattedEndpoints);
  }
);

app.listen(port, () => {
  console.log('Welcome to HoPleisure API');
});
