import * as Sentry from '@sentry/node';
import {nodeProfilingIntegration} from '@sentry/profiling-node';
import {env} from '../../utils/constants';
import {EnvironmentNamesEnum} from '../../utils/helpers';

if (
  env.environment === EnvironmentNamesEnum.STAGING ||
  env.environment === EnvironmentNamesEnum.PRODUCTION
) {
  Sentry.init({
    environment: env.environment,
    dsn: env.sentryLink,
    integrations: [nodeProfilingIntegration()],
    // Performance Monitoring
    tracesSampleRate: 1.0, //  Capture 100% of the transactions

    // Set sampling rate for profiling - this is relative to tracesSampleRate
    profilesSampleRate: 1.0,
  });
}
