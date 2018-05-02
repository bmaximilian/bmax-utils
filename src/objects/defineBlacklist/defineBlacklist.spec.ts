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

        const blacklisted = blacklist(object);
        expect(blacklisted).to.have.property('bar', 'test');
        expect(blacklisted).to.have.property('foo', 'foo');
        expect(blacklisted).not.to.have.property('secret');
        expect(blacklisted).not.to.have.property('topSecret');
    });
});
