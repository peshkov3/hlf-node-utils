import { ChainService } from './chain.service';
import { FabricOptions } from '../models/fabricoptions.model';
export declare class HlfClient extends ChainService {
    /**
     * set hlf options
     *
     * @param {FabricOptions} fabricoptions
     * @memberof HlfClient
     */
    setOptions(fabricoptions: FabricOptions): void;
    /**
     * init
     * @returns {Promise<any>}
     * @memberof ChainService
     */
    init(): Promise<any>;
    /**
     * query hlf
     * @param fcnRequest
     * @param argsRequest
     * @param ccId
     */
    query(fcnRequest: string, argsRequest: string[], ccId?: string): Promise<any>;
    /**
     * invoke
     * @param {any} fcnRequest
     * @param {any} argsRequest
     * @param {any} ccId
     * @returns
     * @memberof ChainService
     */
    invoke(fcnRequest: string, argsRequest: string[], ccId?: string): Promise<any>;
}
