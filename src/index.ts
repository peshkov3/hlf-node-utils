import { addColors, Logger, LoggerInstance, transports, AbstractConfigSet } from 'winston';
import 'winston-daily-rotate-file';
import { EnvConfig } from './config/env';
import { Loggers } from './logging/winston';
import { Json } from './json/jsonutils';

export class Utils {
    public static logger: LoggerInstance = (EnvConfig.NODE_ENV === 'test') ? Loggers.testLogger : Loggers.prodlogger;
    public static errorMessage(name: string, err: string) {
        this.logger.error(name);
        this.logger.error(err);
    }
    public static serializeJson(obj: Object): string { return Json.serializeJson(obj); }
    public static deserializeJson(string: string): Object { return Json.deserializeJson(string); }
}