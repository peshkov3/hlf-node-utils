import { LoggerInstance } from 'winston';
import 'winston-daily-rotate-file';
import { Loggers } from './logging/winston';
import { Json } from './json/jsonutils';

export class Utils {

    // public static errorMessage(name: string, err: string) {
    //     this.logger.error(name);
    //     this.logger.error(err);
    // }
    public static serializeJson(obj: Object): string { return Json.serializeJson(obj); }
    public static deserializeJson(string: string): Object { return Json.deserializeJson(string); }
}

// tslint:disable-next-line:max-classes-per-file
export class Log {
    public static hlf: LoggerInstance = Loggers.hlf;
    public static grpc: LoggerInstance = Loggers.grpc;

}

export { HlfClient } from './hlfclient/hlfclient';
