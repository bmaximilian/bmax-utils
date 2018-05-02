/**
 * Created on 02.05.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { expect } from 'chai';
import 'mocha';
import { objectLowDashToCamelCase } from './objectLowDashToCamelCase';

describe('objectLowDashToCamelCase', () => {
    it('Should convert a simple object with camel case properties to an object with low dash properties', () => {
        const obj = {
            CONST: 'Hello World',
            camel_case: 99,
            long_camel_case_value: 'foo',
            normal: 1,
        };
        const convertedObj = objectLowDashToCamelCase(obj);
        expect(convertedObj.normal).to.equal(obj.normal);
        expect(convertedObj.camelCase).to.equal(obj.camel_case);
        expect(convertedObj.CONST).to.equal(obj.CONST);
        expect(convertedObj.longCamelCaseValue).to.equal(obj.long_camel_case_value);
    });

    it('Should convert a nested object with camel case properties to an object with low dash properties', () => {
        const obj = {
            CONST: 'Hello World',
            camel_case: 99,
            long_camel_case_value: 'foo',
            nested: {
                CONST: 'Hello Max',
                camel_case: 100,
                long_camel_case_value: 'bar',
                nested_obj: {
                    CONST: 'Hello Universe',
                    camel_case: 200,
                    long_camel_case_value: 'baz',
                    normal: 20,
                },
                normal: 10,
            },
            normal: 1,
        };
        const convertedObj = objectLowDashToCamelCase(obj);
        expect(convertedObj.normal).to.equal(obj.normal);
        expect(convertedObj.camelCase).to.equal(obj.camel_case);
        expect(convertedObj.CONST).to.equal(obj.CONST);
        expect(convertedObj.longCamelCaseValue).to.equal(obj.long_camel_case_value);

        expect(convertedObj.nested.normal).to.equal(obj.nested.normal);
        expect(convertedObj.nested.camelCase).to.equal(obj.nested.camel_case);
        expect(convertedObj.nested.CONST).to.equal(obj.nested.CONST);
        expect(convertedObj.nested.longCamelCaseValue).to.equal(obj.nested.long_camel_case_value);

        expect(convertedObj.nested.nestedObj.normal).to.equal(obj.nested.nested_obj.normal);
        expect(convertedObj.nested.nestedObj.camelCase).to.equal(obj.nested.nested_obj.camel_case);
        expect(convertedObj.nested.nestedObj.CONST).to.equal(obj.nested.nested_obj.CONST);
        expect(convertedObj.nested.nestedObj.longCamelCaseValue).to.equal(obj.nested.nested_obj.long_camel_case_value);
    });
});
