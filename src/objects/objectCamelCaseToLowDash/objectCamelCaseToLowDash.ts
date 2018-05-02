/**
 * Created on 02.05.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { isArray, keys } from 'lodash';
import { camelCaseToLowDash } from '../../strings/camelCaseToLowDash';

/**
 * Converts a object with camel case properties
 * to a object with low dash separated properties
 *
 * @param {Object} object : Object : The object to convert
 * @return {Object} : The object whose properties are converted to low dash separated strings
 */
export function objectCamelCaseToLowDash(object: any) {
    const returnObject: any = isArray(object) ? [] : {};

    keys(object).forEach((key) => {
        if (object[key] instanceof Object) {
            returnObject[camelCaseToLowDash(key)] = objectCamelCaseToLowDash(object[key]);
        } else {
            returnObject[camelCaseToLowDash(key)] = object[key];
        }
    });

    return returnObject;
}
