
import * as Pusher from 'pusher';
import { PusherOptions } from '../models/pusheroptions.model';
import { Log } from '../index';

/**
 * PusherService
 * 
 * @export
 * @class PusherService
 */
export class PusherService {

    private pusher = null;

    /**
     * set pusher options
     * 
     * @param {PusherOptions} options 
     * @memberof PusherService
     */
    public setOptions(options: PusherOptions) {
        this.pusher = new Pusher(options);
    }

    /**
     * trigger pusher message
     * 
     * @param {string} channel 
     * @param {string} eventName 
     * @param {*} data 
     * @returns {void} 
     * @memberof PusherService
     */
    trigger(channel: string, eventName: string, data: any): void {
        if (this.pusher) {
            return this.pusher.trigger(channel, eventName, data);
        } else {
            Log.pusher.error('Pusher options not set.');
        }
    }

}
