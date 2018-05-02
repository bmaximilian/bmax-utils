/**
 * Created on 17.04.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { isString } from 'lodash';
import { objectLowDashToCamelCase } from '../../objects/objectLowDashToCamelCase';
import { lowDashToCamelCase as stringLowDashToCamelCase } from '../../strings/lowDashToCamelCase';

/**
 * Converts a low dash separated string to camel case string
 *
 * @param {String} toConvert : String : The object to convert
 * @return {string} : The converted string
 */
export function lowDashToCamelCase(toConvert: any) {
    if (isString(toConvert)) {
        return stringLowDashToCamelCase(toConvert);
    }

    return objectLowDashToCamelCase(toConvert);
}
