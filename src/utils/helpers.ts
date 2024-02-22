interface EnvVariableConst {
  secretKey: string;
  expiresIn: string;
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
