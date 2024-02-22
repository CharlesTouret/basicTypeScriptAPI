import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import AuthRouter from './routes/auth';
import UserRouter from './routes/user';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

app.use('/auth', AuthRouter);
app.use('/user', UserRouter);

app.listen(port, () => {
  console.log(`Welcome to HoPleisure API, listenning on port :${port}.`);
});
