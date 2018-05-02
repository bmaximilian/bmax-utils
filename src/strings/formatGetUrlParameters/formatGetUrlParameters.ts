/**
 * Created on 17.04.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { get, isString } from 'lodash';

/**
 * Formats json params to get uri params
 *
 * @param {Object} params : Object : The parameters to format
 * @return {string} : The formatted parameters
 */
export function formatGetUrlParameters(params: object) {
    const paramString = Object
        .keys(params)
        .map(key => `${key}=${encodeURIComponent(get(params, key))}`)
        .join('&');

    return isString(paramString) && paramString.length > 0 ? `?${paramString}` : '';
}
