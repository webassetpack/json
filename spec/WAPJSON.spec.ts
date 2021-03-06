
import {
    WAPTestTools,
    WAPTestFactory,
    WAPReader,
    WebAssetPack,
    PluginManager
} from '@wap/test-tools';
import WAPJSON from '../src/WAPJSON';
import def from './support/def.json';
import expectation from './support/test-pkg/data.json';

describe('WAPJSON', () => {
    let reader: WAPReader = new WAPReader(new WAPTestFactory());

    beforeAll(() => {
        PluginManager.getInstance().addPlugin('json', new WAPJSON());
    });

    it('reads file properly', async () => {
        let buffer: ArrayBuffer = await WAPTestTools.compile(def);
        let pack: WebAssetPack = await reader.read(buffer);
        let data: any = await pack.get('test.json');
        expect(data).toEqual(expectation);
    });
});
