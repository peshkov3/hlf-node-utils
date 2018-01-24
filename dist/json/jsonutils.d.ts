export declare class Json {
    static serializeJson: (obj: Object) => string | boolean;
    static deserializeJson: (string: string) => boolean | Object;
    static stringifyParams: (params: any[]) => boolean | string[];
}
