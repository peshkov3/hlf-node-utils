var expect = require('chai').expect;
var index = require('../dist/index.js');
var yup = require('yup');
var client = null;
var requestHelper = null;

describe('hlf client', () => {
    it('should be able to create a fabric client', () => {
        client = new index.HlfClient();
    });
    it('should be able to set options', () => {
        client.setOptions({
            walletPath: './test/creds',
            userId: 'PeerAdmin',
            channelId: 'mychannel',
            networkUrl: `grpc://localhost:7051`,
            eventUrl: `grpc://localhost:7053`,
            ordererUrl: `grpc://localhost:7050`,
        });
    });
    it('should be able to initialize the fabric client', () => {
        client.init().then(params => {
            expect(1).to.equal(1);
        }).catch(err => {
            expect(1).to.equal(0);
        });
    });
});



describe('requesthelper', () => {
    it('should be able to create a requesthelper', () => {
        requestHelper = new index.RequestHelper(client);
    });
    it('should be able to validate a request body', () => {
        const body = {
            name: 'hello',
            payload: {
                a: 'a',
                b: 'b'
            }
        };
        const schema = yup.object().shape({
            name: yup.string().required(),
            payload: yup.object().required()
        });
        requestHelper.validateRequest(schema, body).then(params => {
            expect(1).to.equal(1);
        }).catch(err => {
            expect(1).to.equal(0);
        });
    });
    it('should be able to invalidate a request body', () => {
        const body = {
            name: 'hello'
        };
        const schema = yup.object().shape({
            name: yup.string().required(),
            payload: yup.object().required()
        });
        requestHelper.validateRequest(schema, body).then(params => {
            expect(1).to.equal(0);
        }).catch(err => {
            expect(1).to.equal(1);
        });
    });
    it('should be able to send a query request', () => {
        const body = {
            name: 'hello',
            payload: {
                a: 'a',
                b: 'b'
            }
        };
        requestHelper.queryRequest([body.name, body.payload], 'ping').then(params => {
            expect(1).to.equal(1);
        }).catch(err => {
            expect(1).to.equal(0);
        });
    });
    it('should be able to send an invoke request', () => {
        const body = {
            name: 'hello',
            payload: {
                a: 'a',
                b: 'b'
            }
        };
        requestHelper.invokeRequest([body.name, body.payload], 'ping').then(params => {
            expect(1).to.equal(1);
        }).catch(err => {
            expect(1).to.equal(0);
        });
    });
});