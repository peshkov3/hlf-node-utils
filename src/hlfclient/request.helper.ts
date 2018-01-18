import { HlfClient, Log } from '../index';

export class RequestHelper {

    constructor(private hlfClient: HlfClient) { }

    /**
     * send chaincode request and validate Schema
     * @param {any} schema 
     * @param {any} body 
     * @param {RouteQueries} routeQuery 
     * @returns {Promise<any>} 
     * @memberof RoutesHelper
     */
    public invokeRequest(params: any[], routeQuery: string): Promise<any> {
        this.stringify(params);
        return this.hlfClient.invoke(routeQuery, params, )
            .then(() => {
                Log.grpc.info('Valid transaction');
                return { success: true };
            })
            .catch(err => {
                Log.grpc.error(`${routeQuery} error`, err);
                throw new Error(`${routeQuery} error`);
            });
    }

    /**
     * queryRequest
     * @param {any} schema 
     * @param {any} body 
     * @param {RouteQueries} routeQuery 
     * @returns {Promise<any>} 
     * @memberof RoutesHelper
     */
    public queryRequest(params: any[], routeQuery: string, schema?: Schema): Promise<any> {
        this.stringify(params);
        return this.hlfClient.query(routeQuery, params)
            .then((resp) => {
                Log.grpc.info('Valid query');
                return resp;
            })
            .catch(err => {
                Log.grpc.error(`${routeQuery} error`, err);
                throw err;
            });
    }

    /**
     * validate requests with yup
     * @param {Schema} schema 
     * @param {any} body 
     * @returns {Promise<any>} 
     * @memberof RequestHelper
     */
    public validateRequest(schema: Schema, body): Promise<any> {
        return schema.validate(body)
            .then(params => params)
            .catch((err) => {
                Log.grpc.error('Validation error', err);
                throw err;
            });
    }

    /**
     * stringify all params
     * @private
     * @param {any} params 
     * @memberof RequestHelper
     */
    private stringify(params) {
        params.map(param => {
            if (typeof param === 'object' || Array.isArray(param)) {
                param = JSON.stringify(param);
            } else {
                param.toString();
            }
        });
    }

}
