(function (window, undefined) {
    'use strict';

     function ll(options) {
         var ll = this.ll = options.ll;

         this.ext = {
           // Get the name of a base.
           getName: [],
         };

         this.extend(options.extensions || []);
     }

     ll.prototype.extend = function (extension) {
        // If extension is a function, call it and recurse.
        if (typeof extension === 'function') {
          this.extend(extension.call(this));
          return;
        }

        // If extension is an array, recurse.
        if (extension.length) {
          for (var i = 0; i < extension.length; i++) {
            this.extend(extension[i]);
          }
          return;
        }

        // Add the extensions.
        for (var key in this.ext) {
          if (key in extension) {
            this.ext[key].push(extension[key]);
          }
        }
     };


     ll.prototype.getName = function (baseId) {
		return notUndefined(this.ext.getName, function (fn) {
			return fn(baseId);
		});
	 };


    window.ll = ll;
}(window));
