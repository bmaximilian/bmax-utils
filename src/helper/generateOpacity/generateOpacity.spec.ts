/**
 * Created on 02.05.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { expect } from 'chai';
import 'mocha';
import { generateOpacity } from './generateOpacity';

describe('generateOpacity', () => {
    it('Should create a rgba value from a valid rgb string', () => {
        expect(generateOpacity('rgb(0, 51, 255)', 0.6)).to.equal('rgba(0, 51, 255, 0.6)');
    });

    it('Should create a rgba value from a valid rgba string', () => {
        expect(generateOpacity('rgba(0, 51, 255, .1)', 0.6)).to.equal('rgba(0, 51, 255, 0.6)');
    });

    it('Should create a rgba value from a valid rgb string', () => {
        expect(generateOpacity('#0033ff', 0.6)).to.equal('rgba(0, 51, 255, 0.6)');
    });
});
