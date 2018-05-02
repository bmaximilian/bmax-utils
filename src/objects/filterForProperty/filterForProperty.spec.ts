/**
 * Created on 02.05.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { expect } from 'chai';
import 'mocha';
import { filterForProperty } from './filterForProperty';

describe('filterForProperty', () => {
    it('Should collect all properties to one object', () => {
        const object = {
            subObjectFour: {
                unimportant: 'mnop',
                value: '13141516',
            },
            subObjectOne: {
                unimportant: 'abcd',
                value: '1234',
            },
            subObjectThree: {
                unimportant: 'ijkl',
                value: '9101112',
            },
            subObjectTwo: {
                unimportant: 'efgh',
                value: '5678',
            },
        };

        expect(filterForProperty(object, 'value')).to.equal({
            subObjectFour: '13141516',
            subObjectOne: '1234',
            subObjectThree: '9101112',
            subObjectTwo: '5678',
        });
    });
});
