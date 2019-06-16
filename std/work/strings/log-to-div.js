// my module
var mandober = function (_, glob) {
    'use strict';

    /**
     * Logs to div that gets appended to document body.
     *
     * @param {*}  message  Message to log.
     * @return {string}  Passed-in message.
     * 
     */
    mm.logToDiv = function (...message) {
        var args = Array.prototype.slice.call(arguments);
        var message = args.join(" ");
        var container = document.getElementsByTagName('body')[0];
        var messageDiv = document.createElement('div');
        messageDiv.innerHTML = message;
        container.appendChild(messageDiv);
        return message;
    };

    // return module
    return mm;

}(mandober || {}, _, typeof window !== 'undefined' ? window : global);
