'use strict';

/**
 * 
 * @param {any} obj Object or id string
 * @returns 
 */
function xObject(obj) {
    // force creation of this type
    if (this === window) return new xObject(obj);
    
    var type = typeof obj;
    // string
    if (type === "string") {
        this.el = document.getElementById(obj);
    // node
    } else if (type === "object" && obj.nodeType !== undefined && obj.nodeType === 1) {
        this.el = obj;
    // Error
    } else {
        throw new Error("Argument is of wrong type");
    }
    // css property
    this._css = this.el.style;
}

/**
 * @param {element} obj Object to set event to.
 * @param {event} evt Event type.
 * @param {function} cb Function to execute.
 */
xObject.addEvent = function (obj, evt, cb) {
    // w3c
    if (typeof addEventListener !== undefined) {
        obj.addEventListener(evt, fn, false);
    }
    // ie
    if (typeof attachEvent !== undefined) {
        obj.attachEvent("on" + evt, fn);
    }
}

/**
 * @param {element} obj Object to remove event from.
 * @param {event} evt Event type.
 * @param {function} cb Function to execute.
 */
xObject.removeEvent = function (obj, evt, cb) {

}





/*
function cb(e) {
    console.log('e', e);
    console.log('target', e.target);
    //console.log('relatedTarget', e.relatedTarget);
}

// dom level 0
//document.onmouseout = cb;

// dom level 2
document.addEventListener("click", cb, false); // true = during capturing; false = during bubbling
//document.removeEventListener("click", cb, false); // params must be the same
*/

