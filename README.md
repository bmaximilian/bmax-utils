# bmax-utils

[![Build Status](https://travis-ci.org/bmaximilian/bmax-utils.svg?branch=master)](https://travis-ci.org/bmaximilian/bmax-utils)
[![Coverage Status](https://coveralls.io/repos/github/bmaximilian/bmax-utils/badge.svg?branch=master)](https://coveralls.io/github/bmaximilian/bmax-utils?branch=master)
[![npm](https://img.shields.io/npm/v/bmax-utils.svg)](https://www.npmjs.com/package/bmax-utils)
[![License](https://img.shields.io/github/license/bmaximilian/bmax-utils.svg)](https://www.apache.org/licenses/LICENSE-2.0)

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
    * [whitelist()](#whitelist)
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

Helper functions for working with objects

#### blacklist

Returns an Object without the forbidden properties

```javascript
import { blacklist } from 'bmax-utils';

blacklist(
    {
        foo: 1,
        bar: 2,
        baz: 3,
    },
    [
        'bar',
        'baz',
    ],
);
// { foo: 1 }
```

#### defineBlacklist

Defines a function that filters an object to contain no keys matching the strings in the submitted list

```javascript
import { defineBlacklist } from 'bmax-utils';

const blacklist = defineBlacklist(['foo', 'bar']);

blacklist({
    foo: 1,
    bar: 2,
    baz: 3,
});
// { baz: 3 }

blacklist({
    fi: 1,
    bar: 2,
    fum: 3,
});
// { fi: 1, fum: 3 }
```

#### defineWhitelist

Defines a function that filters an object to contain only keys matching the strings in the submitted list

```javascript
import { defineWhitelist } from 'bmax-utils';

const whitelist = defineWhitelist(['foo', 'bar']);

whitelist({
    foo: 1,
    bar: 2,
    baz: 3,
});
// { foo: 1, bar: 2 }

whitelist({
    fi: 1,
    bar: 2,
    fum: 3,
});
// { bar: 2 }
```


#### filterForProperty

Filters an object and returns a new object whose properties are the keys of the source object with the filtered prop as value

```javascript
import { filterForProperty } from 'bmax-utils';

filterForProperty({
    name: {
        key: 'name',
        validation: 'min:3',
        value: 'a',
    },
    email: {
        key: 'mail',
        value: 'b',
    },
    phone: {
        key: 'phone',
        value: '0'
    }
}, 'value');
/*
Will return:
{
    name: 'a',
    email: 'b',
    phone: '0',
}
*/
```


#### hasMatchingKeys

Checks if an object has keys that match to the RegExp

```javascript
import { hasMatchingKeys } from 'bmax-utils';

hasMatchingKeys({
    test: 1,
    tester: 2,
    foo: 3,
}, /er$/);
// true

hasMatchingKeys({
    test: 1,
    foo: 3,
}, /er$/)
// false
```


#### whitelist

Returns an Object that contains only the allowed properties

```javascript
import { whitelist } from 'bmax-utils';

whitelist(
    {
        foo: 1,
        bar: 2,
        baz: 3,
    },
    [
        'bar',
        'baz',
    ],
);
// { bar: 2, baz: 3 }
```


### strings

Helper functions for working with strings

#### formatGetUrlParameters

Formats json params to GET HTTP parameters

```javascript
import { formatGetUrlParameters } from 'bmax-utils';

formatGetUrlParameters({
    number: 1234,
    key: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
});
// '?number=1234&secret=da39a3ee5e6b4b0d3255bfef95601890afd80709'
```


#### replacePlaceholder

Replaces a placeholder string
>  Placeholders look like: {key}

```javascript
import { replacePlaceholder } from 'bmax-utils';

replacePlaceholder('The id is: {id}', { id: 1 });
// 'The id is: 1'
```

