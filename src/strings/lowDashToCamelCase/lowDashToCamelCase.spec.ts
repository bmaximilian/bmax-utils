/**
 * Created on 17.04.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { expect } from 'chai';
import 'mocha';
import { lowDashToCamelCase } from './lowDashToCamelCase';

describe('lowDashToCamelCase', () => {
    it('Should convert a low dash string to a camel case string', () => {
        expect(lowDashToCamelCase('hallo_welt')).to.equal('halloWelt');
        expect(lowDashToCamelCase('hallo__welt')).to.equal('halloWelt');
        expect(lowDashToCamelCase('hallo_Welt')).to.equal('halloWelt');
    });

    it('Should leave completely uppercase values uppercase', () => {
        expect(lowDashToCamelCase('HALLO_WELT')).to.equal('HALLO_WELT');
        expect(lowDashToCamelCase('HALLOWELT')).to.equal('HALLOWELT');
    });

    it('Should convert all low dash separations in a string to camel case', () => {
        expect(lowDashToCamelCase('hallo_welt_hallo_welt')).to.equal('halloWeltHalloWelt');
        expect(lowDashToCamelCase('camel_case_camelCase')).to.equal('camelCaseCamelCase');
    });

    it('Should ignore trailing underscores', () => {
        expect(lowDashToCamelCase('_Camel_Case')).to.equal('_CamelCase');
        expect(lowDashToCamelCase('_camel_Case')).to.equal('_camelCase');
        expect(lowDashToCamelCase('__camel_Case')).to.equal('__camelCase');
    });
});
