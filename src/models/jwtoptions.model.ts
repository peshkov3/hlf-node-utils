export interface JwtOptions {
    jwksUri: string;
    issuer: string;
    algorithms: string[];
}