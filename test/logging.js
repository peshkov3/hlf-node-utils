var expect = require('chai').expect;
var index = require('../dist/index.js');


describe('log hlf ', () => {
    it('should log debug messages', () => {
        expect(index.Log.hlf.debug('test')).to.notThrowAnError;
    });
    it('should log info messages', () => {
        expect(index.Log.hlf.info('test')).to.notThrowAnError;
    });
    it('should log error messages', () => {
        expect(index.Log.hlf.error('test')).to.notThrowAnError;
    });
});
describe('log grpc ', () => {
    it('should log debug messages', () => {
        expect(index.Log.grpc.debug('test')).to.notThrowAnError;
    });
    it('should log info messages', () => {
        expect(index.Log.grpc.info('test')).to.notThrowAnError;
    });
    it('should log error messages', () => {
        expect(index.Log.grpc.error('test')).to.notThrowAnError;
    });
});
describe('log pusher ', () => {
    it('should log debug messages', () => {
        expect(index.Log.pusher.debug('test')).to.notThrowAnError;
    });
    it('should log info messages', () => {
        expect(index.Log.pusher.info('test')).to.notThrowAnError;
    });
    it('should log error messages', () => {
        expect(index.Log.pusher.error('test')).to.notThrowAnError;
    });
});
describe('log sqs ', () => {
    it('should log debug messages', () => {
        expect(index.Log.sqs.debug('test')).to.notThrowAnError;
    });
    it('should log info messages', () => {
        expect(index.Log.sqs.info('test')).to.notThrowAnError;
    });
    it('should log error messages', () => {
        expect(index.Log.sqs.error('test')).to.notThrowAnError;
    });
});