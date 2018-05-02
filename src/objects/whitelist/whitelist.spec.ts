/**
 * Created on 02.05.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { expect } from 'chai';
import 'mocha';
import { whitelist } from './whitelist';

describe('whitelist', () => {
    it('Should whitelist properties', () => {
        const object = {
            priv: 'foo',
            pub: 'test',
            secret: 'sssh',
            topSecret: 42,
        };

        const list = ['pub', 'priv'];
        expect(whitelist(object, list)).to.equal({
            priv: 'foo',
            pub: 'test',
        });
    });
});
