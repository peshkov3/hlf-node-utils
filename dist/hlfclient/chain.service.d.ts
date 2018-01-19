/// <reference types="node" />
export declare abstract class ChainService {
    protected options: {
        walletPath: string;
        userId: string;
        channelId: string;
        networkUrl: string;
        eventUrl: string;
        ordererUrl: string;
    };
    protected client: Client;
    protected channel: Channel;
    protected targets: Peer[];
    protected txId: any;
    protected newDefaultKeyValueStore(walletPath: string): Promise<IKeyValueStore>;
    protected setStateStore(wallet: IKeyValueStore): void;
    protected getUserContext(userId: string): Promise<User>;
    protected isUserEnrolled(user: any): boolean;
    protected handleError(err: any): Promise<any>;
    protected newQuery(requestFunction: string, requestArguments: string[], chaincodeId: string): Promise<Buffer[]>;
    protected getQueryResponse(queryResponses: Buffer[]): object;
    protected sendTransactionProposal(requestFunction: string, requestArguments: string[], chaincodeId: string): Promise<ProposalResponseObject>;
    protected isProposalGood(results: ProposalResponseObject): boolean;
    protected logSuccessfulProposalResponse(results: any): void;
    protected extractRequestFromProposalResponse(results: ProposalResponseObject): TransactionRequest;
    protected registerTxEvent(): Promise<any>;
    protected concatEventPromises(sendPromise: any, eventPromises: any): Promise<any>;
}
