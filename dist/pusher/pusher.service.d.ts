import { PusherOptions } from '../models/pusheroptions.model';
/**
 * PusherService
 *
 * @export
 * @class PusherService
 */
export declare class PusherService {
    private pusher;
    /**
     * set pusher options
     *
     * @param {PusherOptions} options
     * @memberof PusherService
     */
    setOptions(options: PusherOptions): void;
    /**
     * trigger pusher message
     *
     * @param {string} channel
     * @param {string} eventName
     * @param {*} data
     * @returns {void}
     * @memberof PusherService
     */
    trigger(channel: string, eventName: string, data: any): void;
}
