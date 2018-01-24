"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var Json = /** @class */ (function () {
    function Json() {
    }
    Json.serializeJson = function (obj) {
        try {
            return JSON.stringify(obj);
        }
        catch (error) {
            index_1.Log.config.error("JSON stringify error for object: " + obj);
            return false;
        }
    };
    Json.deserializeJson = function (string) {
        try {
            return JSON.parse(string);
        }
        catch (error) {
            index_1.Log.config.error("JSON parse error for string: " + string);
            return false;
        }
    };
    Json.stringifyParams = function (params) {
        try {
            return params.map(function (param) {
                if (typeof param === 'object' || Array.isArray(param)) {
                    return JSON.stringify(param);
                }
                else {
                    return param.toString();
                }
            });
        }
        catch (error) {
            index_1.Log.config.error("stringifyParams error for params: " + params);
            return false;
        }
    };
    return Json;
}());
exports.Json = Json;
//# sourceMappingURL=jsonutils.js.map