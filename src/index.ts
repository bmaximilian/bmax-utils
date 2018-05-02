import { getDayDifferenceBetweenDates } from './dates/getDayDifferenceBetweenDates';

import { camelCaseToLowDash } from './helper/camelCaseToLowDash';
import { generateOpacity } from './helper/generateOpacity';
import { generateTrigger } from './helper/generateTrigger';
import { getErrorsFromAjaxOrValidationResponse } from './helper/getErrorsFromAjaxOrValidationResponse';
import { hexToRgb } from './helper/hexToRgb';
import { isTrueIsh } from './helper/isTrueIsh';
import { lowDashToCamelCase } from './helper/lowDashToCamelCase';

import { blacklist } from './objects/blacklist';
import { defineBlacklist } from './objects/defineBlacklist';
import { defineWhitelist } from './objects/defineWhitelist';
import { filterForProperty } from './objects/filterForProperty';
import { hasMatchingKeys } from './objects/hasMatchingKeys';
import { whitelist } from './objects/whitelist';

import { formatGetUrlParameters } from './strings/formatGetUrlParameters';
import { replacePlaceholder } from './strings/replacePlaceholder';

export {
    getDayDifferenceBetweenDates,

    camelCaseToLowDash,
    generateOpacity,
    generateTrigger,
    getErrorsFromAjaxOrValidationResponse,
    hexToRgb,
    isTrueIsh,
    lowDashToCamelCase,

    blacklist,
    defineBlacklist,
    defineWhitelist,
    filterForProperty,
    hasMatchingKeys,
    whitelist,

    formatGetUrlParameters,
    replacePlaceholder,
};
