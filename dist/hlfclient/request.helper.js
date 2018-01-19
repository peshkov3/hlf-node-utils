"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var RequestHelper = /** @class */ (function () {
    function RequestHelper(hlfClient) {
        this.hlfClient = hlfClient;
    }
    /**
     * send chaincode request and validate Schema
     * @param {any} schema
     * @param {any} body
     * @param {RouteQueries} routeQuery
     * @returns {Promise<any>}
     * @memberof RoutesHelper
     */
    RequestHelper.prototype.invokeRequest = function (params, routeQuery) {
        index_1.Utils.stringifyParams(params);
        return this.hlfClient.invoke(routeQuery, params)
            .then(function () {
            index_1.Log.grpc.info('Valid transaction');
            return { success: true };
        })
            .catch(function (err) {
            index_1.Log.grpc.error(routeQuery + " error", err);
            throw new Error(routeQuery + " error");
        });
    };
    /**
     * queryRequest
     * @param {any} schema
     * @param {any} body
     * @param {RouteQueries} routeQuery
     * @returns {Promise<any>}
     * @memberof RoutesHelper
     */
    RequestHelper.prototype.queryRequest = function (params, routeQuery, schema) {
        index_1.Utils.stringifyParams(params);
        return this.hlfClient.query(routeQuery, params)
            .then(function (resp) {
            index_1.Log.grpc.info('Valid query');
            return resp;
        })
            .catch(function (err) {
            index_1.Log.grpc.error(routeQuery + " error", err);
            throw err;
        });
    };
    /**
     * validate requests with yup
     * @param {Schema} schema
     * @param {any} body
     * @returns {Promise<any>}
     * @memberof RequestHelper
     */
    RequestHelper.prototype.validateRequest = function (schema, body) {
        return schema.validate(body)
            .then(function (params) { return params; })
            .catch(function (err) {
            index_1.Log.grpc.error('Validation error', err);
            throw err;
        });
    };
    return RequestHelper;
}());
exports.RequestHelper = RequestHelper;
//# sourceMappingURL=request.helper.js.map