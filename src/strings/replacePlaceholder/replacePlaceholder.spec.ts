/**
 * Created on 17.04.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { expect } from 'chai';
import 'mocha';
import { replacePlaceholder } from './replacePlaceholder';

describe('replacePlaceholderString', () => {
    it('Should replace a string with one parameter', () => {
        expect(replacePlaceholder('The id is: {id}', { id: 1 }))
            .to.equal('The id is: 1');
    });

    it('Should replace a string with multiple parameters', () => {
        expect(replacePlaceholder(
            'I want to {method} the route {route} for the id {id}',
            {
                id: 1,
                method: 'GET',
                route: '/node',
            },
        ))
            .to.equal('I want to GET the route /node for the id 1');
    });

    it('Should replace one parameter multiple times', () => {
        expect(replacePlaceholder('The id is: {id}. So {id}? Yes, {id}.', { id: 1 }))
            .to.equal('The id is: 1. So 1? Yes, 1.');
    });

    it('Should replace a string with multiple parameters multiple times', () => {
        expect(replacePlaceholder(
            'I want to {method} the route {route} for the id {id}. So {method} {route}/{id}? Ye {method} {route}/{id}.',
            {
                id: 1,
                method: 'GET',
                route: '/node',
            },
        ))
            .to.equal('I want to GET the route /node for the id 1. So GET /node/1? Ye GET /node/1.');
    });
});
