/**
 * Created on 02.05.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { includes, toLower } from 'lodash';

/**
 * Checks if a value is true-ish
 *
 * @param {String} value : String : The value to check
 * @return {boolean} : Returns true when the value is true-ish
 */
export function isTrueIsh(value: any) {
    return includes(
        [
            'true',
            'yes',
            '1',
        ],
        toLower(value),
    );
}
