/**
 * Created on 02.05.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { expect } from 'chai';
import 'mocha';
import { isTrueIsh } from './isTrueIsh';

describe('isTrueIsh', () => {
    it('Should convert "true" to boolean true', () => {
        expect(isTrueIsh('true')).to.be.true;
    });

    it('Should convert "yes" to boolean true', () => {
        expect(isTrueIsh('yes')).to.be.true;
    });

    it('Should convert "1" to boolean true', () => {
        expect(isTrueIsh('1')).to.be.true;
    });

    it('Should convert integer "1" to boolean true', () => {
        expect(isTrueIsh(1)).to.be.true;
    });

    it('Should stay boolean true', () => {
        expect(isTrueIsh(true)).to.be.true;
    });

    it('Should convert "false" to boolean false', () => {
        expect(isTrueIsh('false')).to.be.false;
    });

    it('Should convert "no" to boolean false', () => {
        expect(isTrueIsh('no')).to.be.false;
    });

    it('Should convert "0" to boolean false', () => {
        expect(isTrueIsh('0')).to.be.false;
    });

    it('Should convert integer "0" to boolean false', () => {
        expect(isTrueIsh(0)).to.be.false;
    });

    it('Should convert null to boolean false', () => {
        expect(isTrueIsh(null)).to.be.false;
    });

    it('Should convert undefined to boolean false', () => {
        expect(isTrueIsh(undefined)).to.be.false;
    });
});
