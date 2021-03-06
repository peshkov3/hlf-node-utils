/// <reference types="winston" />
import { LoggerInstance } from 'winston';
import 'winston-daily-rotate-file';
export declare class Loggers {
    static hlf: LoggerInstance;
    static grpc: LoggerInstance;
    static pusher: LoggerInstance;
    static config: LoggerInstance;
    static awssqs: LoggerInstance;
    static redisQueue: LoggerInstance;
    static app: LoggerInstance;
    static file: LoggerInstance;
    static prodlogger: LoggerInstance;
}
