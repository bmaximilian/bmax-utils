/**
 * Created on 20.04.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { defineBlacklist } from '../defineBlacklist';

/**
 * Returns an Object without the forbidden properties
 *
 * @param {Object} model : Object : The object with all properties
 * @param {String[]} forbidden : String[] : Array of forbidden properties
 * @return {Object} : Returns an object without the blacklisted properties
 */
export function blacklist(model: object, forbidden: string[]) {
    return defineBlacklist(forbidden)(model);
}
