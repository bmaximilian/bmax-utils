/**
 * Created on 02.05.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { expect } from 'chai';
import 'mocha';
import { hasMatchingKeys } from './hasMatchingKeys';

describe('objectHasMatchingKeys', () => {
    it('Should check if the passed object has matching keys', () => {
        const object = {
            hell: 'evil',
            hellau: 'bar',
            hello: 'foo',
            value: 'hello',
        };

        expect(hasMatchingKeys(object, /hell+/)).to.equal(true);
        expect(hasMatchingKeys(object, /^hell$/)).to.equal(true);
        expect(hasMatchingKeys(object, /^hella$/)).to.equal(false);
    });
});
