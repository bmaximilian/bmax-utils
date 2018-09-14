/**
 * Created on 02.05.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { isArray, keys } from 'lodash';
import { lowDashToCamelCase } from '../../strings/lowDashToCamelCase';

/**
 * Converts a object with low dash separated properties
 * to a object with camel case properties
 *
 * @param {Object} object : Object : The object to convert
 * @return {Object} : The object whose properties are converted to camel case strings
 */
export function objectLowDashToCamelCase(object: any) {
    const returnObject: any = isArray(object) ? [] : {};

    keys(object).forEach((key) => {
        if (object[key] instanceof Object) {
            returnObject[lowDashToCamelCase(key)] = objectLowDashToCamelCase(object[key]);
        } else {
            returnObject[lowDashToCamelCase(key)] = object[key];
        }
    });

    return returnObject;
}
