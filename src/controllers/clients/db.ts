import {env} from '../../utils/constants';
import {drizzle} from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

export const client = postgres(env.databaseUrl, {prepare: false});
export const db = drizzle(client);
