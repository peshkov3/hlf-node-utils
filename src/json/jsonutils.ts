
export class Json {

    public static serializeJson = (obj: Object): string => {
        return JSON.stringify(obj);
    }
    public static deserializeJson = (string: string): Object => {
        return JSON.parse(string);
    }
    public static stringifyParams = (params: any[]) => {
        params.map(param => {
            if (typeof param === 'object' || Array.isArray(param)) {
                param = JSON.stringify(param);
            } else {
                param.toString();
            }
        });
    }
}
