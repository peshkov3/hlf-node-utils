/// <reference types="winston" />
import { LoggerInstance } from 'winston';
import 'winston-daily-rotate-file';
export declare class Utils {
    static serializeJson(obj: Object): string | boolean;
    static deserializeJson(string: string): Object | boolean;
    static stringifyParams(params: any[]): string[] | boolean;
}
export declare class Log {
    static hlf: LoggerInstance;
    static grpc: LoggerInstance;
    static pusher: LoggerInstance;
    static awssqs: LoggerInstance;
    static config: LoggerInstance;
    static app: LoggerInstance;
    static file: LoggerInstance;
    static redisQueue: LoggerInstance;
}
export { HlfClient } from './hlfclient/hlfclient';
export { RequestHelper } from './hlfclient/request.helper';
export { FabricOptions } from './models/fabricoptions.model';
export { JwtOptions } from './models/jwtoptions.model';
export { GprcOptions } from './models/gprcoptions.model';
export { CondorRoute } from './models/condorroute.model';
