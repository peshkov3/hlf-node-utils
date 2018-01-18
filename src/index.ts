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
    public static stringifyParams(params: any[]): void { Json.stringifyParams(params); }
}

// tslint:disable-next-line:max-classes-per-file
export class Log {
    public static hlf: LoggerInstance = Loggers.hlf;
    public static grpc: LoggerInstance = Loggers.grpc;
    public static pusher: LoggerInstance = Loggers.pusher;

}

export { HlfClient } from './hlfclient/hlfclient';
export { RequestHelper } from './hlfclient/request.helper';

export { FabricOptions } from './models/fabricoptions.model';
export { JwtOptions } from './models/jwtoptions.model';
export { GprcOptions } from './models/gprcoptions.model';
export { CondorRoute } from './models/condorroute.model';
