"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hlf = require("fabric-client");
var type_util_1 = require("type-util");
var index_1 = require("../index");
var ChainService = /** @class */ (function () {
    function ChainService() {
        this.targets = [];
    }
    ChainService.prototype.newDefaultKeyValueStore = function (walletPath) {
        index_1.Log.hlf.debug("WALLET PATH: " + this.options.walletPath);
        index_1.Log.hlf.info('Create a client and set the wallet location');
        return hlf.newDefaultKeyValueStore({ path: walletPath });
    };
    ChainService.prototype.setStateStore = function (wallet) {
        index_1.Log.hlf.info('Set wallet path, and associate user ', this.options.userId, ' with application');
        index_1.Log.hlf.info("WALLET: " + JSON.stringify(wallet));
        this.client.setStateStore(wallet);
    };
    ChainService.prototype.getUserContext = function (userId) {
        return this.client.getUserContext(userId, true);
    };
    ChainService.prototype.isUserEnrolled = function (user) {
        index_1.Log.hlf.info('Check user is enrolled, and set a query URL in the network');
        if (user === undefined || user == null || user.isEnrolled() === false) {
            index_1.Log.hlf.error('User not defined, or not enrolled. Or network is down.');
            return false;
        }
        return true;
    };
    ChainService.prototype.handleError = function (err) {
        index_1.Log.hlf.error('Caught Error', err);
        return Promise.reject(new Error('Blockchain is not running'));
    };
    ChainService.prototype.newQuery = function (requestFunction, requestArguments, chaincodeId) {
        index_1.Log.hlf.info('Make query');
        var transactionId = this.client.newTransactionID();
        index_1.Log.hlf.info('Assigning transaction_id: ', transactionId.getTransactionID());
        var request = {
            chaincodeId: chaincodeId,
            txId: transactionId,
            fcn: requestFunction,
            args: requestArguments,
        };
        return this.channel.queryByChaincode(request);
    };
    ChainService.prototype.getQueryResponse = function (queryResponses) {
        if (!queryResponses.length) {
            index_1.Log.hlf.info('No payloads were returned from query');
        }
        else {
            index_1.Log.hlf.info('Query result count = ', queryResponses.length);
        }
        if (queryResponses[0] instanceof Error) {
            throw new Error(queryResponses[0].toString());
        }
        index_1.Log.hlf.info('Response is ', queryResponses[0].toString());
        return JSON.parse(queryResponses[0].toString());
    };
    ChainService.prototype.sendTransactionProposal = function (requestFunction, requestArguments, chaincodeId) {
        this.txId = this.client.newTransactionID();
        index_1.Log.hlf.info('Assigning transaction_id: ', this.txId._transaction_id);
        var request = {
            targets: this.targets,
            chaincodeId: chaincodeId,
            fcn: requestFunction,
            args: requestArguments,
            chainId: this.options.channelId,
            txId: this.txId
        };
        return this.channel.sendTransactionProposal(request);
    };
    ChainService.prototype.isProposalGood = function (results) {
        var proposalResponses = results[0];
        var isProposalGood = false;
        if (proposalResponses && proposalResponses[0].response &&
            proposalResponses[0].response.status === 200) {
            isProposalGood = true;
            index_1.Log.hlf.info('transaction proposal was good');
        }
        else {
            index_1.Log.hlf.error('transaction proposal was bad');
        }
        return isProposalGood;
    };
    ChainService.prototype.logSuccessfulProposalResponse = function (results) {
        var proposalResponses = results[0];
        index_1.Log.hlf.info(type_util_1.util.format('Successfully sent Proposal and received ProposalResponse: Status - %s, message - "%s", metadata - "%s"', proposalResponses[0].response.status, proposalResponses[0].response.message));
    };
    ChainService.prototype.extractRequestFromProposalResponse = function (results) {
        return {
            proposalResponses: results[0],
            proposal: results[1],
            header: results[2],
        };
    };
    ChainService.prototype.registerTxEvent = function () {
        // set the transaction listener and set a timeout of 30sec
        // if the transaction did not get committed within the timeout period,
        // fail the test
        var transactionID = this.txId.getTransactionID();
        var eh = this.client.newEventHub();
        eh.setPeerAddr(this.options.eventUrl);
        eh.connect();
        return new Promise(function (resolve, reject) {
            var handle = setTimeout(function () {
                eh.disconnect();
                index_1.Log.hlf.error('The transaction has timed out: ' + transactionID);
                reject();
            }, 30000);
            eh.registerTxEvent(transactionID, function (tx, code) {
                clearTimeout(handle);
                eh.unregisterTxEvent(transactionID);
                eh.disconnect();
                if (code !== 'VALID') {
                    index_1.Log.hlf.error('The transaction was invalid, code = ' + code);
                    reject();
                }
                else {
                    index_1.Log.hlf.info('The transaction has been committed on peer ' + eh.getPeerAddr());
                    resolve();
                }
            });
        });
    };
    ChainService.prototype.concatEventPromises = function (sendPromise, eventPromises) {
        return Promise.all([sendPromise].concat(eventPromises)).then(function (results) {
            index_1.Log.hlf.info('Event promise all complete and testing complete');
            return results[0]; // the first returned value is from the 'sendPromise' which is from the 'sendTransaction()' call
        }).catch(function (err) {
            index_1.Log.hlf.error("Failed to send transaction and get notifications within the timeout period: " + err);
            throw new Error("Failed to send transaction and get notifications within the timeout period: " + err);
        });
    };
    return ChainService;
}());
exports.ChainService = ChainService;
//# sourceMappingURL=chain.service.js.map