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

    it('Should blacklist nested properties', () => {
        const object = {
            baz: 'baz',
            foo: 'bar',
            hello: 'world',
            nest: {
                baz: 'baz',
                foo: 'bar',
                hello: 'world',
                nest: {
                    baz: 'baz',
                    foo: 'bar',
                    hello: 'world',
                },
            },
            nestArr: [
                {
                    baz: 'baz',
                    foo: 'bar',
                    hello: 'world',
                },
                {
                    baz: 'baz',
                    foo: 'bar',
                    hello: 'world',
                },
                {
                    baz: 'baz',
                    foo: 'bar',
                    hello: 'world',
                },
            ],
        };

        const nestedBlacklist = defineBlacklist([
            'foo',
            'nest.foo',
            'nest.nest.hello',
            'nestArr[1].baz',
            'nestArr[1].hello',
            'nestArr[2].foo',
        ]);

        const blacklisted: any = nestedBlacklist(object);
        expect(blacklisted).to.have.property('baz', 'baz');
        expect(blacklisted).not.to.have.property('foo');
        expect(blacklisted).to.have.property('hello', 'world');
        expect(blacklisted).to.have.property('nest');
        expect(blacklisted).to.have.property('nestArr');
        expect(blacklisted.nest).to.have.property('baz', 'baz');
        expect(blacklisted.nest).not.to.have.property('foo');
        expect(blacklisted.nest).to.have.property('hello', 'world');
        expect(blacklisted.nest).to.have.property('nest');
        expect(blacklisted.nest.nest).to.have.property('baz', 'baz');
        expect(blacklisted.nest.nest).to.have.property('foo', 'bar');
        expect(blacklisted.nest.nest).not.to.have.property('hello');
        expect(blacklisted.nestArr).to.have.lengthOf(3);
        expect(blacklisted.nestArr[0]).to.have.property('baz', 'baz');
        expect(blacklisted.nestArr[0]).to.have.property('foo', 'bar');
        expect(blacklisted.nestArr[0]).to.have.property('hello', 'world');
        expect(blacklisted.nestArr[1]).not.to.have.property('baz');
        expect(blacklisted.nestArr[1]).to.have.property('foo', 'bar');
        expect(blacklisted.nestArr[1]).not.to.have.property('hello');
        expect(blacklisted.nestArr[2]).to.have.property('baz', 'baz');
        expect(blacklisted.nestArr[2]).not.to.have.property('foo');
        expect(blacklisted.nestArr[2]).to.have.property('hello', 'world');
    });
});
