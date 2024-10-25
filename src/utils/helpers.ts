export enum EnvironmentNamesEnum {
  LOCAL = 'LOCAL',
  STAGING = 'STAGING',
  PRODUCTION = 'PRODUCTION',
  TEST = 'TEST',
}

interface EnvVariableConst {
  port: string;
  secretKey: string;
  expiresIn: string;
  sentryLink: string;
  databaseUrl: string;
  supabaseUrl: string;
  supabaseKey: string;
  supabaseClientBucketUrl: string;
  environment: EnvironmentNamesEnum;
}

const loadEnvVariablesInConst = (): EnvVariableConst => {
  const envVariables: any = {
    secretKey: process.env.SECRET_JWT_KEY,
    expiresIn: process.env.JWT_EXPIRE_TIME,
  };
  if (Object.values(envVariables).every(x => x !== null && x !== undefined)) {
    const res: EnvVariableConst = envVariables;
    return res;
  } else throw new Error('MISSING_MANDATORY_ENV_VARIABLES');
};

export {loadEnvVariablesInConst, EnvVariableConst};
