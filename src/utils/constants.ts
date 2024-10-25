import {EnvVariableConst, loadEnvVariablesInConst} from './helpers';

export const env: EnvVariableConst = loadEnvVariablesInConst();

// Error codes
// GENERAL
export const INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR';
export const NOT_FOUND = 'NOT_FOUND';

// AUTH
export const AUTH_EMAIL_NOT_CONFIRMED = 'AUTH_EMAIL_NOT_CONFIRMED'
export const AUTH_BAD_CREDENTIALS = 'AUTH_BAD_CREDENTIALS'

// SUPABASE AUTH ERRORS
export const SUPABASE_NOT_CONFIRMED_EMAIL_ERROR = 'Email not confirmed';
export const SUPABASE_INVALID_CREDENTIALS_ERROR = 'Invalid login credentials'