import { ChainService } from './chain.service';
import { FabricOptions } from '../models/fabricoptions.model';

export class HlfClient {

    constructor(private chainService: ChainService) { }

    init(): Promise<any> {
        return this.chainService.init();
    }

    setOptions(fabricoptions: FabricOptions): void {
        this.chainService.setOptions(fabricoptions);
    }

    invoke(invokeRequest: string, params: string[], chaincodeName?: string): Promise<any> {
        return this.chainService.invoke(invokeRequest, params ? params : [], chaincodeName || 'mycc');
    }

    query(queryRequest: string, params: string[], chaincodeName?: string): Promise<any> {
        return this.chainService.query(queryRequest, params ? params : [], chaincodeName || 'mycc');
    }
}
