'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

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

describe('start hlf client', () => {
    it('should start', () => {
        var client = new index.HlfClient();
        client.
    });
});