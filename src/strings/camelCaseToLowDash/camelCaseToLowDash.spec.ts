/**
 * Created on 17.04.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { expect } from 'chai';
import 'mocha';
import { camelCaseToLowDash } from './camelCaseToLowDash';

describe('camelCaseToLowDash', () => {
    it('Should convert a camel case string to a low dash string', () => {
        expect(camelCaseToLowDash('halloWelt')).to.equal('hallo_welt');
    });

    it('Should convert values to lowercase', () => {
        expect(camelCaseToLowDash('HalloWelt')).to.equal('hallo_welt');
    });

    it('Should leave completely uppercase values uppercase', () => {
        expect(camelCaseToLowDash('HALLO_WELT')).to.equal('HALLO_WELT');
        expect(camelCaseToLowDash('HALLOWELT')).to.equal('HALLOWELT');
    });

    it('Should convert all camel cases in a string to low dash separated values', () => {
        expect(camelCaseToLowDash('HalloWeltHalloWelt')).to.equal('hallo_welt_hallo_welt');
        expect(camelCaseToLowDash('camel_caseCamelCase')).to.equal('camel_case_camel_case');
    });

    it('Should ignore trailing underscores', () => {
        expect(camelCaseToLowDash('_CamelCase')).to.equal('_camel_case');
        expect(camelCaseToLowDash('_camelCase')).to.equal('_camel_case');
    });
});
