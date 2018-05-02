/**
 * Created on 02.05.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { isObject, isRegExp, keys } from 'lodash';

/**
 * Checks if an object has keys that match to the RegExp
 *
 * @param {Object} object : Object : Object to check
 * @param {RegExp} match : RegExp : The regex to check for
 * @returns {boolean} : Returns if the object has keys matching the RegExp
 */
export function hasMatchingKeys(object: object, match: RegExp) {
    if (!isObject(object)) {
        throw new Error('Parameter 1 has to be from type Object');
    }

    if (!isRegExp(match)) {
        throw new Error('Parameter 2 has to be from type RegExp');
    }

    let keysAreMatching = false;

    keys(object).every((key) => {
        if (match.test(key)) {
            keysAreMatching = true;
        }

        return !keysAreMatching;
    });

    return keysAreMatching;
}
