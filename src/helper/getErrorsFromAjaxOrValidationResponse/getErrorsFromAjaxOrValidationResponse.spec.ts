/**
 * Created on 02.05.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { expect } from 'chai';
import 'mocha';
import { getErrorsFromAjaxOrValidationResponse } from './getErrorsFromAjaxOrValidationResponse';

describe('getErrorsFromAjaxOrValidationResponse', () => {
    const ajaxResponse = {
        response: {
            errors: {
                items: [
                    'Access Denied',
                ],
            },
        },
        status: 403,
    };

    const validationResponse = [
        {
            field: 'body.username',
            message: 'generic.errors.required',
            validation: 'required',
        },
    ];

    const statusResponse = {
        response: null,
        status: 404,
    };

    it('Should return all errors from backend response', () => {
        const msgs = getErrorsFromAjaxOrValidationResponse(ajaxResponse);

        expect(msgs.backend[0]).to.equal(ajaxResponse.response.errors.items[0]);
        expect(msgs.all[0]).to.equal(ajaxResponse.response.errors.items[0]);
    });

    it('Should return all errors from validation response', () => {
        const msgs = getErrorsFromAjaxOrValidationResponse(validationResponse);

        expect(msgs.validation[0]).to.equal(validationResponse[0].message);
        expect(msgs.all[0]).to.equal(validationResponse[0].message);
    });

    it('Should return all errors from status code response', () => {
        const options = {
            customStatusCodeMessages: {
                404: 'NotFound',
            },
        };
        const msgs = getErrorsFromAjaxOrValidationResponse(statusResponse, options);

        expect(msgs.ajax[0]).to.equal(options.customStatusCodeMessages[404]);
        expect(msgs.all[0]).to.equal(options.customStatusCodeMessages[404]);
    });

    it('Should concat responses', () => {
        const options = {
            customStatusCodeMessages: {
                403: 'AccessDenied',
            },
        };
        const msgs = getErrorsFromAjaxOrValidationResponse(ajaxResponse, options);

        expect(msgs.backend).to.have.length(1);
        expect(msgs.ajax).to.have.length(1);
        expect(msgs.validation).to.have.length(0);
        expect(msgs.all).to.have.length(2);
    });
});
