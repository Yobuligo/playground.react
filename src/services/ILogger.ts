import { Service } from "../serviceProvider/Service";

export interface ILogger {
  log(message: string): void;
}

export class LoggerService extends Service<ILogger> {}

export class Logger implements ILogger {
  log(message: string): void {
    console.log(message);
  }
}
