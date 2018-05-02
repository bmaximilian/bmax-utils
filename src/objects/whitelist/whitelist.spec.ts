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
        const whitelisted = whitelist(object, list);
        expect(whitelisted).to.have.property('priv', 'foo');
        expect(whitelisted).to.have.property('pub', 'test');
        expect(whitelisted).not.to.have.property('secret');
        expect(whitelisted).not.to.have.property('topSecret');
    });
});
