/**
 * Created on 02.05.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { expect } from 'chai';
import 'mocha';
import { generateTrigger } from './generateTrigger';

describe('generateTrigger', () => {
    it('Should return a function', () => {
        expect(typeof generateTrigger('utils/helper/tests')).to.equal('function');
    });

    it('Should return a function that returns a string', () => {
        expect(generateTrigger('utils/helper/tests')('generateTrigger'))
            .to.equal('utils/helper/tests.generateTrigger');
    });
});
