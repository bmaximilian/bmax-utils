/**
 * Created on 20.04.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { defineWhitelist } from '../defineWhitelist';

/**
 * Returns an Object that contains only the allowed properties
 *
 * @param {Object} model : Object : The object with all properties
 * @param {String[]} allowed : String[] : Array of allowed properties
 * @return {Object} : Returns an object with only the whitelisted properties
 */
export function whitelist(model: object, allowed: string[]) {
    return defineWhitelist(allowed)(model);
}
