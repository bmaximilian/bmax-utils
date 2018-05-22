# bmax-utils

> A utility package with JavaScript helper functions.


## Table of Contents

* [dates](#dates)
    * [getDayDifferenceBetweenDates()](#getdaydifferencebetweendates)
* [helper](#helper)
    * [camelCaseToLowDash()](#camelcasetolowdash)
    * [generateOpacity()](#generateopacity)
    * [generateTrigger()](#generatetrigger)
    * [getErrorsFromAjaxOrValidationResponse()](#geterrorsfromajaxorvalidationresponse)
    * [hexToRgb()](#hextorgb)
    * [isTrueIsh()](#istrueish)
    * [lowDashToCamelCase()](#lowdashtocamelcase)
* [objects](#objects)
    * [blacklist()](#blacklist)
    * [defineBlacklist()](#defineblacklist)
    * [defineWhitelist()](#definewhitelist)
    * [filterForProperty()](#filterforproperty)
    * [hasMatchingKeys()](#hasmatchingkeys)
* [strings](#strings)
    * [formatGetUrlParameters()](#formatgeturlparameters)
    * [replacePlaceholder()](#replaceplaceholder)
    
## Functions

### Dates

Helper functions for working with date objects.

#### getDayDifferenceBetweenDates

Returns the difference between two dates in days

```javascript
import { getDayDifferenceBetweenDates } from 'bmax-utils';

const today = new Date();
const tomorrow = new Date().setDate(new Date().getDate() + 1);

getDayDifferenceBetweenDates(today, tomorrow);
// 1
```


### Helper

A package of helper functions that can vary
from very general to very specific use cases.

#### camelCaseToLowDash

Converts a camel case string to low dash separated string if a string is passed to the function.
If an object is passed to the function, it will convert its camelCase keys to low dash separated keys.

```javascript
import { camelCaseToLowDash } from 'bmax-utils';

camelCaseToLowDash('halloWelt');
// 'hallo_welt'

camelCaseToLowDash({ halloWelt: 'halloWelt' });
// { hallo_welt: 'halloWelt' }
```


#### generateOpacity

Generates a valid rgba() css string from a hex, rgb or rgba color with the opacity as second parameter.

```javascript
import { generateOpacity } from 'bmax-utils';

generateOpacity('rgb(0, 51, 255)', 0.6);
// 'rgba(0, 51, 255, 0.6)'

generateOpacity('rgba(0, 51, 255, .1)', 0.6);
// 'rgba(0, 51, 255, 0.6)'

generateOpacity('#0033ff', 0.6);
// 'rgba(0, 51, 255, 0.6)'
```


#### generateTrigger

Generates trigger of dispatched actions to identify which component triggered an action

A simple but useful function for redux applications.

```javascript
import { generateTrigger } from 'bmax-utils';

const trigger = generateTrigger('utils/helper/tests');

// ...
myFunction = () => {
    this.props.dispatch({
        type: 'TEST_ACTION',
        payload: {
            id: 1,
        },
        trigger: trigger('myFunction'),
    });
}

/*
Will dispatch:
{
    type: 'TEST_ACTION',
    payload: {
        id: 1,
    },
    trigger: 'utils/helper/tests/myFunction',
}
*/
```


#### getErrorsFromAjaxOrValidationResponse
```javascript
/**
* Can read error messages from ajax responses in a specific format
* Can read error messages from a indicative.js validation response
*/

// Ajax response input format:
/*
{
    response: {
        errors: {
            items: [
                'My error message 1',
                'My error message 2',
            ],
        },
    },
    status: 403,
}
 */

// Validation response format
/*
[
    {
        field: 'body.username',
        message: 'The username is required',
        validation: 'required',
    },
    {
        field: 'body.password',
        message: 'The password is required',
        validation: 'required',
    },
]
 */

import { getErrorsFromAjaxOrValidationResponse } from 'bmax-utils';

/*
Options can be:
{
    ignoreValidationMessages?: boolean;
    ignoreBackendMessages?: boolean;
    ignoreStatusCodeMessages?: boolean;
    defaultValidationMessageIfEmpty?: string;
    defaultIfEmpty?: string;
    customStatusCodeMessages?: object; // can be i.e. { 404: 'Not Found' }
}
 */

getErrorsFromAjaxOrValidationResponse(response, options);
/*
Will always return:
{
    ajax: string[]; // Returns error messages based on HTTP status codes defined in the options
    all: string[]; // All validation messages
    backend: string[]; // Messages from a backend response
    default: string[]; // Default messages (configured in options)
    validation: string[]; // Messages from an indicative.js validation
    xhrStatus: number; // The HTTP status code
}
*/
```


#### hexToRgb

Converts 6 digit long hex color to rgb. 

```javascript
import { hexToRgb } from 'bmax-utils';

hexToRgb('#0033ff');
// { r: 0, g: 51, b: 255 }

```


#### isTrueIsh

Checks if a value is true-ish

```javascript
import { isTrueIsh } from 'bmax-utils';

isTrueIsh('true');
// true

isTrueIsh('yes');
// true

isTrueIsh('1');
// true

isTrueIsh('foo');
// false
```


#### lowDashToCamelCase

Converts a low dash separated string to camel case string if a string is passed to the function.
If an object is passed to the function, it will convert its low dash separated keys to camelCase keys.

```javascript
import { lowDashToCamelCase } from 'bmax-utils';

lowDashToCamelCase('hallo_welt');
// 'halloWelt'

lowDashToCamelCase({ hallo_welt: 'hallo_welt' });
// { halloWelt: 'hallo_welt' }
```


### objects

#### blacklist

#### defineBlacklist

#### defineWhitelist

#### filterForProperty

#### hasMatchingKeys

### strings

#### formatGetUrlParameters

#### replacePlaceholder