/**
 * Created on 02.05.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { expect } from 'chai';
import 'mocha';
import { defineWhitelist } from './defineWhitelist';

describe('defineWhitelist', () => {
    const whitelist = defineWhitelist(['foo', 'bar', 'baz']);

    it('Should return a function', () => {
        expect(typeof whitelist).to.equal('function');
    });

    it('Should whitelist properties', () => {
        const object = {
            bar: 'test',
            foo: 'foo',
            secret: 'sssh',
            topSecret: 42,
        };

        expect(whitelist(object)).to.equal({
            bar: 'test',
            foo: 'foo',
        });
    });
});
