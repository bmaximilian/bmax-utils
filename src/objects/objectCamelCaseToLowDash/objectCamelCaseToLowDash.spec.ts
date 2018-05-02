/**
 * Created on 02.05.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { expect } from 'chai';
import 'mocha';
import { objectCamelCaseToLowDash } from './objectCamelCaseToLowDash';

describe('objectCamelCaseToLowDash', () => {
    it('Should convert a simple object with camel case properties to an object with low dash properties', () => {
        const obj = {
            CONST: 'Hello World',
            camelCase: 99,
            longCamelCaseValue: 'foo',
            normal: 1,
        };
        const convertedObj = objectCamelCaseToLowDash(obj);
        expect(convertedObj.normal).to.equal(obj.normal);
        expect(convertedObj.camel_case).to.equal(obj.camelCase);
        expect(convertedObj.CONST).to.equal(obj.CONST);
        expect(convertedObj.long_camel_case_value).to.equal(obj.longCamelCaseValue);
    });

    it('Should convert a nested object with camel case properties to an object with low dash properties', () => {
        const obj = {
            CONST: 'Hello World',
            camelCase: 99,
            longCamelCaseValue: 'foo',
            nested: {
                CONST: 'Hello Max',
                camelCase: 100,
                longCamelCaseValue: 'bar',
                nestedObj: {
                    CONST: 'Hello Universe',
                    camelCase: 200,
                    longCamelCaseValue: 'baz',
                    normal: 20,
                },
                normal: 10,
            },
            normal: 1,
        };
        const convertedObj = objectCamelCaseToLowDash(obj);
        expect(convertedObj.normal).to.equal(obj.normal);
        expect(convertedObj.camel_case).to.equal(obj.camelCase);
        expect(convertedObj.CONST).to.equal(obj.CONST);
        expect(convertedObj.long_camel_case_value).to.equal(obj.longCamelCaseValue);

        expect(convertedObj.nested.normal).to.equal(obj.nested.normal);
        expect(convertedObj.nested.camel_case).to.equal(obj.nested.camelCase);
        expect(convertedObj.nested.CONST).to.equal(obj.nested.CONST);
        expect(convertedObj.nested.long_camel_case_value).to.equal(obj.nested.longCamelCaseValue);

        expect(convertedObj.nested.nested_obj.normal).to.equal(obj.nested.nestedObj.normal);
        expect(convertedObj.nested.nested_obj.camel_case).to.equal(obj.nested.nestedObj.camelCase);
        expect(convertedObj.nested.nested_obj.CONST).to.equal(obj.nested.nestedObj.CONST);
        expect(convertedObj.nested.nested_obj.long_camel_case_value).to.equal(obj.nested.nestedObj.longCamelCaseValue);
    });
});
