/**
 * Created on 02.05.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { isDate } from 'lodash';

/**
 * Returns the difference between two dates in days
 *
 * @param {Date} startDate : The start date
 * @param {Date} endDate : The end date
 * @returns {number} : Returns the number of days between the two dates
 */
export function getDayDifferenceBetweenDates(startDate: Date, endDate: Date) {
    if (!isDate(startDate)) throw new Error('Parameter 1 needs to be type Date.');
    if (!isDate(endDate)) throw new Error('Parameter 2 needs to be type Date.');

    const diff = Math.abs(startDate.getTime() - endDate.getTime());

    return Math.ceil(diff / (1000 * 3600 * 24));
}
