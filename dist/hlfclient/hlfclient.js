"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var chain_service_1 = require("./chain.service");
var hlf = require("fabric-client");
var HlfClient = /** @class */ (function (_super) {
    __extends(HlfClient, _super);
    function HlfClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * set hlf options
     *
     * @param {FabricOptions} fabricoptions
     * @memberof HlfClient
     */
    HlfClient.prototype.setOptions = function (fabricoptions) {
        this.options = fabricoptions;
    };
    /**
     * init
     * @returns {Promise<any>}
     * @memberof ChainService
     */
    HlfClient.prototype.init = function () {
        var _this = this;
        this.client = new hlf();
        return Promise.resolve().then(function () {
            return _this.newDefaultKeyValueStore(_this.options.walletPath);
        }).then(function (wallet) {
            _this.setStateStore(wallet);
            return _this.client.getUserContext(_this.options.userId, true);
        }).then(function (user) {
            if (_this.isUserEnrolled(user)) {
                _this.channel = _this.client.newChannel(_this.options.channelId);
                var peerObj = _this.client.newPeer(_this.options.networkUrl);
                _this.channel.addPeer(peerObj);
                _this.channel.addOrderer(_this.client.newOrderer(_this.options.ordererUrl));
                _this.targets.push(peerObj);
            }
            return true;
        }, function (error) {
            _this.handleError(error);
        }).catch(function (err) {
            _this.handleError(err);
        });
    };
    /**
     * query hlf
     * @param fcnRequest
     * @param argsRequest
     * @param ccId
     */
    HlfClient.prototype.query = function (fcnRequest, argsRequest, ccId) {
        var _this = this;
        if (ccId === void 0) { ccId = 'mycc'; }
        return Promise.resolve().then(function () {
            return _this.newQuery(fcnRequest, argsRequest, ccId);
        }).then(function (queryResponses) {
            return _this.getQueryResponse(queryResponses);
        }).catch(function (err) {
            _this.handleError(err);
        });
    };
    /**
     * invoke
     * @param {any} fcnRequest
     * @param {any} argsRequest
     * @param {any} ccId
     * @returns
     * @memberof ChainService
     */
    HlfClient.prototype.invoke = function (fcnRequest, argsRequest, ccId) {
        var _this = this;
        if (ccId === void 0) { ccId = 'mycc'; }
        return Promise.resolve().then(function () {
            return _this.sendTransactionProposal(fcnRequest, argsRequest, ccId);
        }).then(function (results) {
            if (_this.isProposalGood(results)) {
                _this.logSuccessfulProposalResponse(results);
                var request = _this.extractRequestFromProposalResponse(results);
                var txPromise = _this.registerTxEvent();
                var eventPromises = [];
                eventPromises.push(txPromise);
                var sendPromise = _this.channel.sendTransaction(request);
                return _this.concatEventPromises(sendPromise, eventPromises);
            }
            else {
                index_1.Log.hlf.error('Failed to send Proposal or receive valid response. Response null or status is not 200. exiting...');
                throw new Error('Failed to send Proposal or receive valid response. Response null or status is not 200. exiting...');
            }
        }, function (err) {
            index_1.Log.hlf.error(err);
            throw new Error('Failed to send proposal due to error: ' + err.stack ? err.stack : err);
        }).then(function (response) {
            if (response.status === 'SUCCESS') {
                index_1.Log.hlf.info('Successfully sent transaction to the orderer.');
                return _this.txId.getTransactionID();
            }
            else {
                index_1.Log.hlf.error("" + response.status);
                throw new Error("Failed to order the transaction. Error code: " + response.status);
            }
        }, function (err) {
            index_1.Log.hlf.error(err);
            throw new Error('Failed to send transaction due to error: ' + err.stack ? err.stack : err);
        });
    };
    return HlfClient;
}(chain_service_1.ChainService));
exports.HlfClient = HlfClient;
//# sourceMappingURL=hlfclient.js.map