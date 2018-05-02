/**
 * Created on 02.05.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { has, keys } from 'lodash';

/**
 * Filters an object and returns a new object
 * whose properties are the keys of the source object with the filtered prop as value
 *
 * @param {Object} object : Object : The source object
 * @param {String} prop : String : The prop to filter
 * @returns {{}} : An object like { <key_of_source>: <prop_passed_in_arguments_from_source> }
 */
export function filterForProperty(object: any, prop: string) {
    const buffer: any = {};

    keys(object).forEach((key) => {
        if (has(object[key], prop)) {
            buffer[key] = object[key][prop];
        }
    });

    return buffer;
}
