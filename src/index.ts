import { LoggerInstance } from 'winston';
import 'winston-daily-rotate-file';
import { Loggers } from './logging/winston';
import { Json } from './json/jsonutils';

export class Utils {
    public static logger: LoggerInstance = Loggers.testLogger;
    public static errorMessage(name: string, err: string) {
        this.logger.error(name);
        this.logger.error(err);
    }
    public static serializeJson(obj: Object): string { return Json.serializeJson(obj); }
    public static deserializeJson(string: string): Object { return Json.deserializeJson(string); }
}

export { HlfClient } from './hlfclient/hlfclient';
