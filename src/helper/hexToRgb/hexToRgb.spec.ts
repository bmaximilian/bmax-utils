/**
 * Created on 02.05.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { expect } from 'chai';
import 'mocha';
import { hexToRgb } from './hexToRgb';

describe('hexToRgb', () => {
    it('Should convert a hex value to rgb object', () => {
        const converted = hexToRgb('#0033ff');
        expect(converted).to.have.property('r', 0);
        expect(converted).to.have.property('g', 51);
        expect(converted).to.have.property('b', 255);
    });

    it('Should return null when no valid hex color', () => {
        expect(hexToRgb('foo')).to.equal(null);
    });
});
