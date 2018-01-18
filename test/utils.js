var expect = require('chai').expect;
var index = require('../dist/index.js');


describe('serializeJson', () => {
    it('should return a string', () => {
        var result = index.Utils.serializeJson({ test: 'test' });
        expect(result).to.equal('{"test":"test"}');
    });
});
describe('deserializeJson', () => {
    it('should return an object', () => {
        var result = index.Utils.deserializeJson('{"test":"test"}');
        expect(result.test).to.equal('test');
    });
});