import { WAPPlugin } from '@wap/core';
import { IDictionary } from '@totalpave/interfaces';
export declare class WAPJSONReader extends WAPPlugin<IDictionary> {
    protected _read(data: Uint8Array): Promise<IDictionary>;
}
export default WAPJSONReader;
