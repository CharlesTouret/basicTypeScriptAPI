import * as dotenv from 'dotenv';
import path from 'path';
import {Knex} from 'knex';

dotenv.config({path: path.join(__dirname, '../../.env')});
const config: Knex.Config = {
  client: 'postgres',
  connection: process.env.DATA_BASE_URL,
  migrations: {
    extension: 'ts',
    tableName: 'knex_migrations',
    directory: path.join(__dirname, 'migrations'),
  },
};

export default {
  default: config,
  production: config,
  development: config,
};
