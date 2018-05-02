/**
 * Created on 17.04.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

/**
 * Converts a camel case string to low dash separated string
 *
 * @param {String} string : String : The string to convert
 * @return {string} : String : The converted string
 */
export function camelCaseToLowDash(string: string) {
    const out = string.toString().replace(/([a-z0-9])([A-Z])/g, '$1_$2');
    return string === string.toString().toUpperCase() ? out : out.toLowerCase();
}
