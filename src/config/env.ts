require('dotenv').config();

export class EnvConfig {

    // AWS
    public static AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY || '';
    public static AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || '';
    public static AWS_REGION = process.env.AWS_REGION || '';
    public static AWS_QUEUE_NAME = process.env.AWS_QUEUE_NAME || '';

    // FABRIC
    public static PEER_HOST = process.env.PEER_HOST || 'localhost';
    public static ORDERER_HOST = process.env.ORDERER_HOST || 'localhost';
    public static LOCAL_CREDS = process.env.LOCAL_CREDS || false;

    // NODE
    public static NODE_ENV = process.env.NODE_ENV || 'test';
    public static PORT = process.env.PORT || 3000;
    public static GRPC_PORT = process.env.GRPC_PORT || 50051;

    // PUSHER
    public static PUSHER_KEY = process.env.PUSHER_KEY;
    public static PUSHER_APP_ID = process.env.PUSHER_APP_ID;
    public static PUSHER_SECRET = process.env.PUSHER_SECRET;
    public static PUSHER_CLUSTER = process.env.PUSHER_CLUSTER;
    public static CHAINCODE_NAME = process.env.CHAINCODE_NAME || 'mycc';

    // GOOGLE
    public static GOOGLE_CREDS_PATH = process.env.GOOGLE_CREDS_PATH;
    public static GOOGLE_SHEET_IDENTIFIER = process.env.GOOGLE_SHEET_IDENTIFIER;
    public static GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
    public static GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;
    public static GOOGLE_MAPPING_SHEET_NAME = process.env.GOOGLE_MAPPING_SHEET_NAME;
    public static GOOGLE_GROUPING_SHEET_NAME = process.env.GOOGLE_GROUPING_SHEET_NAME;

}
