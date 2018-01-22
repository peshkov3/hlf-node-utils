"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pusher = require("pusher");
var index_1 = require("../index");
/**
 * PusherService
 *
 * @export
 * @class PusherService
 */
var PusherService = /** @class */ (function () {
    function PusherService() {
        this.pusher = null;
    }
    /**
     * set pusher options
     *
     * @param {PusherOptions} options
     * @memberof PusherService
     */
    PusherService.prototype.setOptions = function (options) {
        this.pusher = new Pusher(options);
    };
    /**
     * trigger pusher message
     *
     * @param {string} channel
     * @param {string} eventName
     * @param {*} data
     * @returns {void}
     * @memberof PusherService
     */
    PusherService.prototype.trigger = function (channel, eventName, data) {
        if (this.pusher) {
            return this.pusher.trigger(channel, eventName, data);
        }
        else {
            index_1.Log.pusher.error('Pusher options not set.');
        }
    };
    return PusherService;
}());
exports.PusherService = PusherService;
//# sourceMappingURL=pusher.service.js.map