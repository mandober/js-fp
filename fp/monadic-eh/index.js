/*
 * Handling errors: exceptions, nulls, returning error objects, monadic error handler

 https://jrsinclair.com/articles/2019/elegant-error-handling-with-the-js-either-monad/#fnref:1
**/

"use strict";

var _ = require('lodash');

console.log("Monadic EH");

// sample data (fake CSV)
const dataHeaders = ["timestamp", "content", "viewed", "href"];

const dataField = [
    "2018-10-27T05:33:34+00:00,@madhatter invited you,unread,https://croquet.com/01",
    "2018-10-25T03:50:08+00:00,@cheshiret sent you an,unread,https://croquet.com/88",
    "2018-10-26T13:47:12+00:00,@queenofts tournaments,viewed,https://croquet.com/11"
];

// horribly wrong CSV parsing
function splitFields(row) {
    return row.split(",");
}

// match property names to CSV headers
function zipRow(headerFields, fieldData) {
    if (headerFields.length !== fieldData.length) 
        throw new Error("Row has an unexpected number of fields");
    
    return _.zipObject(headerFields, fieldData);
}


let o = zipRow(dataHeaders, splitFields(dataField));
console.log(0);



// add human-readable date to the object, to be printed in the template
function addDateStr(messageObj) {
    const errMsg = 'Unable to parse date stamp in message object';
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];

    const d = new Date(messageObj.datestamp);
    if (isNaN(d)) throw new Error(errMsg);
    const datestr = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;

    return Object.assign(messageObj, datestr);
    //return {datestr, ...messageObj};
}


const rowToMessage = _.template(`<li class="Message Message--<% viewed %>">
  <a href="<% href %>" class="Message-link"><% content %></a>
  <time datetime="<% datestamp %>"><% datestr %></time>
<li>`);

const showError = _.template(`<li class="Error"><% message %></li>`);


/*
Now the processing part which can fail at any step.
Strategies for EH.
*/



/* 1) try...catch

Any of the steps in the try block might throw an error.
If an error happens, we catch the error and show the error message.
The function is easy to follow, but the code is impure.
*/
function processRow(headerFieldNames, row) {
    try {
        fields = splitFields(row);
        console.log(fields);

        rowObj = zipRow(headerFieldNames, fields);
        console.log(rowObj);

        rowObjWithDate = addDateStr(rowObj);
        console.log(rowObjWithDate);

        let rtm = rowToMessage(rowObj);
        console.log(rtm);

        return rtm;
        // return rowToMessage(rowObj);

    } catch(e) {
        return showError(e);
    }
}



// console.log(splitFields(dataField));
// let ret = 
processRow(dataHeaders, dataField[0]);
// console.log(ret);




/* 2) nulls

Null value doesn’t tell much, we don't know why the previous call failed.
We have to guess; we make up an error message, and call showError().
*/
function processRowWithNulls(headerFieldNames, row) {
    fields = splitFields(row);
    rowObj = zipRow(headerFieldNames, fields);

    if (rowObj === null) {
        return showError(new Error('Encountered a row with an unexpected number of items'));
    }

    rowObjWithDate = addDateStr(rowObj);

    if (rowObjWithDate === null) {
        return showError(new Error('Unable to parse date in row object'));
    }

    return rowToMessage(rowObj);
}



/* 3) returning error objects

Pure functions always return a value.
So the EH code needs to assume we always return a value:
as a first attempt, what if we returned an Error object on failure;
i.e. instead of throwing we return an error instead.
*/
function processRowreturningErrors(headerFieldNames, row) {
    fields = splitFields(row);
    rowObj = zipRow(headerFieldNames, fields);

    if (rowObj instanceof Error) {
        return showError(rowObj);
    }

    rowObjWithDate = addDateStr(rowObj);

    if (rowObjWithDate instanceof Error) {
        return showError(rowObjWithDate);
    }

    return rowToMessage(rowObj);
}


