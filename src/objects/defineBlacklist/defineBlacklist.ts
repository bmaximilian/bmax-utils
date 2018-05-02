import { cloneDeep, forOwn, includes, isArray, isObject, unset } from 'lodash';

/**
 * Defines a blacklist function for the allowed parameters
 *
 * @param {String[]} forbidden : String[] : Array of forbidden properties
 * @returns {(object) => object)} : Returns a function that returns a model without the forbidden properties
 */
export function defineBlacklist(forbidden: string[]) {
    if (!isArray(forbidden)) throw new Error('Parameter 1 needs to be an array.');

    /**
     * Returns an Object without the forbidden properties
     *
     * @param {Object} model : Object : The object with all properties
     * @return {Object} : Returns an object without the blacklisted properties
     */
    return function blacklist(model: object) {
        if (!isObject(model)) throw new Error('Parameter 1 needs to be an object.');

        const replaceModel: object = cloneDeep(model);

        forOwn(replaceModel, (value, prop) => {
            if (includes(forbidden, prop)) {
                unset(replaceModel, prop);
            }
        });

        return replaceModel;
    };
}
