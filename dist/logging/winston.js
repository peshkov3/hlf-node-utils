"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = require("winston");
require("winston-daily-rotate-file");
var Loggers = /** @class */ (function () {
    function Loggers() {
    }
    Loggers.hlf = new winston_1.Logger({
        transports: [new winston_1.transports.Console({
                level: 'debug',
                prettyPrint: true,
                handleExceptions: true,
                json: false,
                label: 'FABRIC',
                colorize: true,
            })],
        exitOnError: false,
    });
    Loggers.grpc = new winston_1.Logger({
        transports: [new winston_1.transports.Console({
                level: 'debug',
                prettyPrint: true,
                handleExceptions: true,
                json: false,
                label: 'GRPC',
                colorize: true,
            })],
        exitOnError: false,
    });
    Loggers.pusher = new winston_1.Logger({
        transports: [new winston_1.transports.Console({
                level: 'debug',
                prettyPrint: true,
                handleExceptions: true,
                json: false,
                label: 'PUSHER',
                colorize: true,
            })],
        exitOnError: false,
    });
    Loggers.config = new winston_1.Logger({
        transports: [new winston_1.transports.Console({
                level: 'debug',
                prettyPrint: true,
                handleExceptions: true,
                json: false,
                label: 'CONFIG',
                colorize: true,
            })],
        exitOnError: false,
    });
    Loggers.awssqs = new winston_1.Logger({
        transports: [new winston_1.transports.Console({
                level: 'debug',
                prettyPrint: true,
                handleExceptions: true,
                json: false,
                label: 'SQS',
                colorize: true,
            })],
        exitOnError: false,
    });
    Loggers.redisQueue = new winston_1.Logger({
        transports: [new winston_1.transports.Console({
                level: 'debug',
                prettyPrint: true,
                handleExceptions: true,
                json: false,
                label: 'REDIS',
                colorize: true,
            })],
        exitOnError: false,
    });
    Loggers.app = new winston_1.Logger({
        transports: [new winston_1.transports.Console({
                level: 'debug',
                prettyPrint: true,
                handleExceptions: true,
                json: false,
                label: 'APP',
                colorize: true,
            })],
        exitOnError: false,
    });
    Loggers.file = new winston_1.Logger({
        transports: [new winston_1.transports.DailyRotateFile({
                level: 'info',
                filename: process.env.LOG_PATH ? process.env.LOG_PATH + '/dev-logs.log' : '/var/log/chain-service/chain-service.log',
                datePattern: 'yyyy-MM-dd.',
                prepend: true,
                json: false,
                handleExceptions: true,
                maxFiles: 5
            })],
        exitOnError: false,
    });
    Loggers.prodlogger = new winston_1.Logger({
        transports: [new winston_1.transports.Console({
                level: 'debug',
                prettyPrint: true,
                handleExceptions: true,
                json: false,
                label: 'Chain',
                colorize: true,
            }),
            new winston_1.transports.DailyRotateFile({
                level: 'info',
                filename: '/var/log/chain-service/chain-service.log',
                datePattern: 'yyyy-MM-dd.',
                prepend: true,
                json: false,
                handleExceptions: true,
                maxFiles: 10
            })],
        exitOnError: false,
    });
    return Loggers;
}());
exports.Loggers = Loggers;
//# sourceMappingURL=winston.js.map