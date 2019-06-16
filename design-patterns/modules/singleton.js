var mySingleton = (function () {
  // instance stores a reference to the Singleton
  var instance;
  function init() {
    // Private methods and variables
    function privateMethod() {console.log("private");}
    var privateVariable = "also private";
    var privateRandomNumber = Math.random();
    // Public methods and variables
    return {
      publicMethod: () => console.log( "public"),
      publicProperty: "also public",
      getRandomNumber: () => privateRandomNumber;
    };
  };
 
  return {
    // Get the Singleton instance if exists or create one
    getInstance: function () {
      if (!instance) instance = init();
      return instance;
    }
  };
})();


// Usage:
var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // true