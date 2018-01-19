"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("winston-daily-rotate-file");
var winston_1 = require("./logging/winston");
var jsonutils_1 = require("./json/jsonutils");
var Utils = /** @class */ (function () {
    function Utils() {
    }
    // public static errorMessage(name: string, err: string) {
    //     this.logger.error(name);
    //     this.logger.error(err);
    // }
    Utils.serializeJson = function (obj) { return jsonutils_1.Json.serializeJson(obj); };
    Utils.deserializeJson = function (string) { return jsonutils_1.Json.deserializeJson(string); };
    Utils.stringifyParams = function (params) { jsonutils_1.Json.stringifyParams(params); };
    return Utils;
}());
exports.Utils = Utils;
// tslint:disable-next-line:max-classes-per-file
var Log = /** @class */ (function () {
    function Log() {
    }
    Log.hlf = winston_1.Loggers.hlf;
    Log.grpc = winston_1.Loggers.grpc;
    Log.pusher = winston_1.Loggers.pusher;
    Log.sqs = winston_1.Loggers.sqs;
    return Log;
}());
exports.Log = Log;
var hlfclient_1 = require("./hlfclient/hlfclient");
exports.HlfClient = hlfclient_1.HlfClient;
var request_helper_1 = require("./hlfclient/request.helper");
exports.RequestHelper = request_helper_1.RequestHelper;
//# sourceMappingURL=index.js.map