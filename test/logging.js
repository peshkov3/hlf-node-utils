var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('log hlf ', () => {
    it('should log debug messages', () => {
        index.Log.hlf.debug('test')
    });
    it('should log info messages', () => {
        index.Log.hlf.info('test');
    });
    it('should log error messages', () => {
        index.Log.hlf.error('test');
    });
});
describe('log grpc ', () => {
    it('should log debug messages', () => {
        index.Log.grpc.debug('test');
    });
    it('should log info messages', () => {
        index.Log.grpc.info('test');
    });
    it('should log error messages', () => {
        index.Log.grpc.error('test');
    });
});
describe('log pusher ', () => {
    it('should log debug messages', () => {
        index.Log.pusher.debug('test');
    });
    it('should log info messages', () => {
        index.Log.pusher.info('test');
    });
    it('should log error messages', () => {
        index.Log.pusher.error('test');
    });
});
describe('log awssqs ', () => {
    it('should log debug messages', () => {
        index.Log.awssqs.debug('test');
    });
    it('should log info messages', () => {
        index.Log.awssqs.info('test');
    });
    it('should log error messages', () => {
        index.Log.awssqs.error('test');
    });
});