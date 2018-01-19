import 'dotenv';
export interface ProcessEnv {
    [key: string]: string | undefined;
}
export declare class EnvConfig {
    static AWS_ACCESS_KEY: string;
    static AWS_SECRET_ACCESS_KEY: string;
    static AWS_REGION: string;
    static AWS_QUEUE_NAME: string;
    static PEER_HOST: string;
    static ORDERER_HOST: string;
    static CREDS_PATH: string;
    static NODE_ENV: string;
    static PORT: string | number;
    static GRPC_PORT: string | number;
    static PUSHER_KEY: string;
    static PUSHER_APP_ID: string;
    static PUSHER_SECRET: string;
    static PUSHER_CLUSTER: string;
    static CHAINCODE_NAME: string;
    static GOOGLE_CREDS_PATH: string;
    static GOOGLE_SHEET_IDENTIFIER: string;
    static GOOGLE_CLIENT_EMAIL: string;
    static GOOGLE_PRIVATE_KEY: string;
    static GOOGLE_MAPPING_SHEET_NAME: string;
    static GOOGLE_GROUPING_SHEET_NAME: string;
}
