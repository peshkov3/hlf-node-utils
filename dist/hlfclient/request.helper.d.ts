import { HlfClient } from '../index';
export declare class RequestHelper {
    private hlfClient;
    constructor(hlfClient: HlfClient);
    /**
     * send chaincode request and validate Schema
     * @param {any} schema
     * @param {any} body
     * @param {RouteQueries} routeQuery
     * @returns {Promise<any>}
     * @memberof RoutesHelper
     */
    invokeRequest(params: any[], routeQuery: string): Promise<{
        success: boolean;
    }>;
    /**
     * queryRequest
     * @param {any} schema
     * @param {any} body
     * @param {RouteQueries} routeQuery
     * @returns {Promise<any>}
     * @memberof RoutesHelper
     */
    queryRequest(params: any[], routeQuery: string, schema?: Schema): Promise<any>;
    /**
     * validate requests with yup
     * @param {Schema} schema
     * @param {any} body
     * @returns {Promise<any>}
     * @memberof RequestHelper
     */
    validateRequest(schema: Schema, body: any): Promise<any>;
}
