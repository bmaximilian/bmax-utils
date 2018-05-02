/**
 * Created on 17.04.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { expect } from 'chai';
import 'mocha';
import { formatGetUrlParameters } from './formatGetUrlParameters';

describe('formatGetUrlParameters', () => {
    it('Should format url parameters of a GET request', () => {
        const object = { number: 1234, secret: 'da39a3ee5e6b4b0d3255bfef95601890afd80709' };
        const params = formatGetUrlParameters(object);
        expect(params).to.equal(`?number=${object.number}&secret=${object.secret}`);
    });

    it('Should work with values like ä, ö, ü and ß', () => {
        const object = {
            ae: 'ä',
            crit: 'ß',
            oe: 'ö',
            ue: 'ü',
        };

        const params = formatGetUrlParameters(object);
        const encoded = {
            ae: encodeURIComponent('ä'),
            crit: encodeURIComponent('ß'),
            oe: encodeURIComponent('ö'),
            ue: encodeURIComponent('ü'),
        };
        expect(params).to.equal(`?ae=${encoded.ae}&crit=${encoded.crit}&oe=${encoded.oe}&ue=${encoded.ue}`);
    });

    it('Should work with special characters', () => {
        const object = { number: 1234, secret: '!"§$%&/()=?' };
        const params = formatGetUrlParameters(object);
        expect(params).to.equal(`?number=${object.number}&secret=${encodeURIComponent(object.secret)}`);
    });

    it('Should return nothing when empty', () => {
        const object = {};
        const params = formatGetUrlParameters(object);
        expect(params).to.equal('');
    });
});
