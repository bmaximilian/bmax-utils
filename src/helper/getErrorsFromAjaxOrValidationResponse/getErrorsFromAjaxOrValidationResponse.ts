/**
 * Created on 02.05.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { assign, forOwn, has, isArray, isObject, isString } from 'lodash';

export interface IOptions {
    ignoreValidationMessages?: boolean;
    ignoreBackendMessages?: boolean;
    ignoreStatusCodeMessages?: boolean;
    defaultValidationMessageIfEmpty?: string;
    defaultIfEmpty?: string;
    customStatusCodeMessages?: object;
}

export interface IOutput {
    ajax: string[];
    all: string[];
    backend: string[];
    defaultMessage: string[];
    validation: string[];
    xhrStatus: number;
}

/**
 * Returns strings from validation response
 *
 * @param {Object} response : Object : A HTTP (AJAX) or indicative.js (validation) response
 * @param {Object} options : Object :   Contains the customisation object
 * @return {String[]} : Returns an array of error strings
 */
function getValidationErrorsFromResponse(response: any, options: IOptions = {}): string[] {
    const errors: string[] = [];

    if (options.ignoreValidationMessages) {
        return errors;
    }

    if (isArray(response)) {
        response.forEach((validationResponse) => {
            errors.push(validationResponse.message);
        });
    }

    if (
        errors.length === 0
        && has(options, 'defaultValidationMessageIfEmpty')
        && options.defaultValidationMessageIfEmpty
    ) {
        return [options.defaultValidationMessageIfEmpty];
    }

    return errors;
}

/**
 * Returns errors from backend response
 *
 * @param {Object} response : Object : A HTTP (AJAX) or indicative.js (validation) response
 * @param {Object} options : Object :   Contains the customisation object
 * @return {String[]} : Returns an array of error strings
 */
function getBackendErrorFromResponse(response: any, options: IOptions = {}) {
    let errors: string[] = [];

    if (options.ignoreBackendMessages) {
        return errors;
    }

    if (
        has(response, 'response.errors.items')
        && response.response
        && response.response.errors
        && isArray(response.response.errors.items)
    ) {
        errors = response.response.errors.items;
    }

    return errors;
}

/**
 * Returns errors from http status codes
 *
 * @param {Object} response : Object : A HTTP (AJAX) or indicative.js (validation) response
 * @param {Object} options : Object :   Contains the customisation object
 *                                      (important key for the function: customStatusCodeMessages)
 *                                      keys are http status codes, vales are translation strings
 * @return {String[]} : Returns an array of error strings
 */
function defineCustomErrorMessagesForHttpStatusCode(response: any, options: IOptions = {}) {
    const errors: string[] = [];

    if (options.ignoreStatusCodeMessages) {
        return errors;
    }

    let statusCodeOptions: any = {};
    // Translator.getAvailableKeys('generic.errors').forEach((statusCode: string) => {
    //     statusCodeOptions[statusCode] = `generic.errors.${statusCode}`;
    // });

    if (!has(response, 'status')) {
        return errors;
    }

    if (has(options, 'customStatusCodeMessages') && isObject(options.customStatusCodeMessages)) {
        statusCodeOptions = assign({}, statusCodeOptions, options.customStatusCodeMessages);
    }

    forOwn(statusCodeOptions, (value, key) => {
        if (response.status && response.status.toString() === key.toString()) {
            errors.push(value);
        }
    });

    return errors;
}

/**
 *
 * @param {Object} response : Object : A HTTP (AJAX) or indicative.js (validation) response
 * @param {Object} options : Object :   Contains the customisation object
 *                                      Options are:
 *                                          customStatusCodeMessages: Key value store of status codes with translations
 *                                          defaultIfEmpty: Default error message
 *                                          defaultValidationMessageIfEmpty: Default validation message
 *                                          ignoreValidationMessages: Ignores validation errors when true
 *                                          ignoreBackendMessages: Ignores backend messages then true
 *                                          ignoreStatusCodeMessages: Ignores status code messages then true
 * @return {{
 * validation: String[],
 * backend: String[],
 * ajax: String[],
 * defaultMessage: String[],
 * all: String[],
 * xhrStatus: number,
 * }} : ValidationObject
 */
export function getErrorsFromAjaxOrValidationResponse(response: any, options: IOptions = {}) {
    const output: IOutput = {
        ajax: defineCustomErrorMessagesForHttpStatusCode(response, options),
        all: [],
        backend: getBackendErrorFromResponse(response, options),
        defaultMessage: [],
        validation: getValidationErrorsFromResponse(response, options),
        xhrStatus: has(response, 'status') && response.status ? response.status : 200,
    };

    output.all = [
        ...output.ajax,
        ...output.backend,
        ...output.validation,
    ];

    if (output.all.length === 0 && has(options, 'defaultIfEmpty')) {
        if (isArray(options.defaultIfEmpty)) {
            output.all = options.defaultIfEmpty;
            output.defaultMessage = options.defaultIfEmpty;
        } else if (isString(options.defaultIfEmpty)) {
            output.all = [options.defaultIfEmpty];
            output.defaultMessage = [options.defaultIfEmpty];
        }
    }

    return output;
}
