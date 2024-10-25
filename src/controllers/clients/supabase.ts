import {createClient} from '@supabase/supabase-js';
import {env} from '../../utils/constants';

export const app = createClient<any>(env.supabaseUrl, env.supabaseKey);
