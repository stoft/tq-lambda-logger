import { LogLevels } from './logLevels';

export interface LogOptions {

  /**
   * This governs which logs will be written. If log level is
   * INFO all logs with INFO and above will be written. So: INFO
   * WARN and ERROR.
   */
  logLevel?: LogLevels;

  /**
   * The id that came from the service that called this lambda.
   * It is best practice to send this through a header called CorrelationId.
   * This allows tracking of "events" through multiple distributed services.
   */
  correlationId?: string;
}
