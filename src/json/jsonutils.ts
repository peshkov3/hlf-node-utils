
export class Json {

    public static serializeJson = (obj: Object): string => {
        return JSON.stringify(obj);
    }
    public static deserializeJson = (string: string): Object => {
        return JSON.parse(string);
    }
}
