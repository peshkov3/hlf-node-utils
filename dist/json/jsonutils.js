"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Json = /** @class */ (function () {
    function Json() {
    }
    Json.serializeJson = function (obj) {
        return JSON.stringify(obj);
    };
    Json.deserializeJson = function (string) {
        return JSON.parse(string);
    };
    Json.stringifyParams = function (params) {
        params.map(function (param) {
            if (typeof param === 'object' || Array.isArray(param)) {
                param = JSON.stringify(param);
            }
            else {
                param.toString();
            }
        });
    };
    return Json;
}());
exports.Json = Json;
//# sourceMappingURL=jsonutils.js.map