/* tslint:disable:no-magic-numbers comment-type */
import { DataUtils } from './data.utils';

describe('DataUtils', () => {

    it('should get timestamp', () => {
        expect(DataUtils.getTimestamp('10.12.2019')).toEqual(1570827600000);
    });
});
