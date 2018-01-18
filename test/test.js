'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');
var client = null;

describe('serializeJson json', () => {
    it('should return a string', () => {
        var result = index.Utils.serializeJson({ test: 'test' });
        expect(result).to.equal('{"test":"test"}');
    });
});
describe('deserializeJson string', () => {
    it('should return an object', () => {
        var result = index.Utils.deserializeJson('{"test":"test"}');
        expect(result.test).to.equal('test');
    });
});

describe('set hlf client options', () => {
    it('should be able to set options', () => {
        client = new index.HlfClient();
        client.setOptions({
            walletPath: 'walletPath',
            userId: 'PeerAdmin',
            channelId: 'mychannel',
            networkUrl: `grpc://localhost:7051`,
            eventUrl: `grpc://localhost:7053`,
            ordererUrl: `grpc://localhost:7050`,
        });
    });
});

describe('init hlf client', () => {
    it('should be able to initialize the fabric client', () => {
        client.init();
    });
});