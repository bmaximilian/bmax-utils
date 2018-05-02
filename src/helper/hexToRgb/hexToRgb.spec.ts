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
        const out = {
            b: 255,
            g: 51,
            r: 0,
        };

        expect(hexToRgb('#0033ff')).to.equal(out);
    });

    it('Should return null when no valid hex color', () => {
        expect(hexToRgb('foo')).to.equal(null);
    });
});
