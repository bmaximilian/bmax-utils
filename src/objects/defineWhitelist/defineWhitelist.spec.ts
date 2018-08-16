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

        const whitelisted = whitelist(object);
        expect(whitelisted).to.have.property('bar', 'test');
        expect(whitelisted).to.have.property('foo', 'foo');
        expect(whitelisted).not.to.have.property('secret');
        expect(whitelisted).not.to.have.property('topSecret');
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

        const nestedWhitelist = defineWhitelist([
            'baz',
            'hello',
            'nest.baz',
            'nest.hello',
            'nest.nest.baz',
            'nest.nest.foo',
            'nestArr[0]',
            'nestArr[1].foo',
            'nestArr[2].baz',
            'nestArr[2].hello',
        ]);

        const whitelisted: any = nestedWhitelist(object);
        expect(whitelisted).to.have.property('baz', 'baz');
        expect(whitelisted).not.to.have.property('foo');
        expect(whitelisted).to.have.property('hello', 'world');
        expect(whitelisted).to.have.property('nest');
        expect(whitelisted).to.have.property('nestArr');
        expect(whitelisted.nest).to.have.property('baz', 'baz');
        expect(whitelisted.nest).not.to.have.property('foo');
        expect(whitelisted.nest).to.have.property('hello', 'world');
        expect(whitelisted.nest).to.have.property('nest');
        expect(whitelisted.nest.nest).to.have.property('baz', 'baz');
        expect(whitelisted.nest.nest).to.have.property('foo', 'bar');
        expect(whitelisted.nest.nest).not.to.have.property('hello');
        expect(whitelisted.nestArr).to.have.lengthOf(3);
        expect(whitelisted.nestArr[0]).to.have.property('baz', 'baz');
        expect(whitelisted.nestArr[0]).to.have.property('foo', 'bar');
        expect(whitelisted.nestArr[0]).to.have.property('hello', 'world');
        expect(whitelisted.nestArr[1]).not.to.have.property('baz');
        expect(whitelisted.nestArr[1]).to.have.property('foo', 'bar');
        expect(whitelisted.nestArr[1]).not.to.have.property('hello');
        expect(whitelisted.nestArr[2]).to.have.property('baz', 'baz');
        expect(whitelisted.nestArr[2]).not.to.have.property('foo');
        expect(whitelisted.nestArr[2]).to.have.property('hello', 'world');
    });
});
