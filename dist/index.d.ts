/// <reference types="winston" />
import { LoggerInstance } from 'winston';
import 'winston-daily-rotate-file';
export declare class Utils {
    static serializeJson(obj: Object): string;
    static deserializeJson(string: string): Object;
    static stringifyParams(params: any[]): void;
}
export declare class Log {
    static hlf: LoggerInstance;
    static grpc: LoggerInstance;
    static pusher: LoggerInstance;
    static awssqs: LoggerInstance;
}
export { HlfClient } from './hlfclient/hlfclient';
export { RequestHelper } from './hlfclient/request.helper';
export { FabricOptions } from './models/fabricoptions.model';
export { JwtOptions } from './models/jwtoptions.model';
export { GprcOptions } from './models/gprcoptions.model';
export { CondorRoute } from './models/condorroute.model';
