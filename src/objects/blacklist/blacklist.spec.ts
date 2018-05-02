/**
 * Created on 02.05.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { expect } from 'chai';
import 'mocha';
import { blacklist } from './blacklist';

describe('blacklist', () => {
    it('Should blacklist properties', () => {
        const object = {
            priv: 'foo',
            pub: 'test',
            secret: 'sssh',
            topSecret: 42,
        };

        const list = ['secret', 'topSecret'];
        const blacklisted = blacklist(object, list);
        expect(blacklisted).to.have.property('priv', 'foo');
        expect(blacklisted).to.have.property('pub', 'test');
        expect(blacklisted).not.to.have.property('secret');
        expect(blacklisted).not.to.have.property('topSecret');
    });
});
