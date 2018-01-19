/// <reference types="winston" />
import { LoggerInstance } from 'winston';
import 'winston-daily-rotate-file';
export declare class Loggers {
    static hlf: LoggerInstance;
    static grpc: LoggerInstance;
    static pusher: LoggerInstance;
    static sqs: LoggerInstance;
    static prodlogger: LoggerInstance;
}
