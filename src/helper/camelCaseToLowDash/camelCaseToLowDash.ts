/**
 * Created on 17.04.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { isString } from 'lodash';
import { objectCamelCaseToLowDash } from '../../objects/objectCamelCaseToLowDash';
import { camelCaseToLowDash as stringCamelCaseToLowDash } from '../../strings/camelCaseToLowDash';

/**
 * Converts a camel case string to low dash separated string
 *
 * @param {String} toConvert : String : The string to convert
 * @return {string} : String : The converted string
 */
export function camelCaseToLowDash(toConvert: any) {
    if (isString(toConvert)) {
        return stringCamelCaseToLowDash(toConvert);
    }

    return objectCamelCaseToLowDash(toConvert);
}
