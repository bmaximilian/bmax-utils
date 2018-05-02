/**
 * Created on 02.05.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { expect } from 'chai';
import 'mocha';
import { defineBlacklist } from './defineBlacklist';

describe('defineBlacklist', () => {
    const blacklist = defineBlacklist(['secret', 'topSecret', 'superSecret']);

    it('Should return a function', () => {
        expect(typeof blacklist).to.equal('function');
    });

    it('Should blacklist properties', () => {
        const object = {
            bar: 'test',
            foo: 'foo',
            secret: 'sssh',
            topSecret: 42,
        };

        expect(blacklist(object)).to.equal({
            bar: 'test',
            foo: 'foo',
        });
    });
});
