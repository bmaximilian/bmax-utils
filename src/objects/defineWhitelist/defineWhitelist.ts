/**
 * Created on 20.04.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { get, has, isArray, isObject, set } from 'lodash';

/**
 * Defines a whitelist function for the allowed parameters
 *
 * @param {String[]} allowed : String[] : Array of allowed properties
 * @returns {function(*=)} : Returns a function that returns a model only with the allowed properties
 */
export function defineWhitelist(allowed: string[]) {
    if (!isArray(allowed)) throw new Error('Parameter 1 needs to be an array.');

    /**
     * Returns only the allowed properties of the model
     *
     * @param {Object} model : Object : The object with all properties
     * @return {Object} : Returns an object with only the whitelisted properties
     */
    return function whitelist(model: object) {
        if (!isObject(model)) throw new Error('Parameter 1 needs to be an object.');

        const buffer = {};

        allowed.forEach((key) => {
            if (has(model, key)) {
                set(buffer, key, get(model, key, null));
            }
        });

        return buffer;
    };
}
