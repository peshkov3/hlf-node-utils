"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv");
var EnvConfig = /** @class */ (function () {
    function EnvConfig() {
    }
    // AWS
    EnvConfig.AWS_ACCESS_KEY = process.env['AWS_ACCESS_KEY'] || '';
    EnvConfig.AWS_SECRET_ACCESS_KEY = process.env['AWS_SECRET_ACCESS_KEY'] || '';
    EnvConfig.AWS_REGION = process.env['AWS_REGION'] || '';
    EnvConfig.AWS_QUEUE_NAME = process.env['AWS_QUEUE_NAME'] || '';
    // FABRIC
    EnvConfig.PEER_HOST = process.env['PEER_HOST'] || 'localhost';
    EnvConfig.ORDERER_HOST = process.env['ORDERER_HOST'] || 'localhost';
    EnvConfig.CREDS_PATH = process.env['CREDS_PATH'] || './creds'; // relative to the root of your app
    // NODE
    EnvConfig.NODE_ENV = process.env['NODE_ENV'] || 'test';
    EnvConfig.PORT = process.env['PORT'] || 3000;
    EnvConfig.GRPC_PORT = process.env['GRPC_PORT'] || 50051;
    // PUSHER
    EnvConfig.PUSHER_KEY = process.env['PUSHER_KEY'];
    EnvConfig.PUSHER_APP_ID = process.env['PUSHER_APP_ID'];
    EnvConfig.PUSHER_SECRET = process.env['PUSHER_SECRET'];
    EnvConfig.PUSHER_CLUSTER = process.env['PUSHER_CLUSTER'];
    EnvConfig.CHAINCODE_NAME = process.env['CHAINCODE_NAME'] || 'mycc';
    // GOOGLE
    EnvConfig.GOOGLE_CREDS_PATH = process.env['GOOGLE_CREDS_PATH'];
    EnvConfig.GOOGLE_SHEET_IDENTIFIER = process.env['GOOGLE_SHEET_IDENTIFIER'];
    EnvConfig.GOOGLE_CLIENT_EMAIL = process.env['GOOGLE_CLIENT_EMAIL'];
    EnvConfig.GOOGLE_PRIVATE_KEY = process.env['GOOGLE_PRIVATE_KEY'];
    EnvConfig.GOOGLE_MAPPING_SHEET_NAME = process.env['GOOGLE_MAPPING_SHEET_NAME'];
    EnvConfig.GOOGLE_GROUPING_SHEET_NAME = process.env['GOOGLE_GROUPING_SHEET_NAME'];
    return EnvConfig;
}());
exports.EnvConfig = EnvConfig;
//# sourceMappingURL=env.js.map