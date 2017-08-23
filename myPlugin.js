// wrap in an immediately invoked functional expression 
(function() {

  // Define the constructor
  this.MyPlugin = function() {

    // Create global variables
    // Declare and initialize (if needed) all global
    // variables under here.
    this.some_variable = null;


    // Define option defaults
    var defaults = {
      prop1: "",
      prop2: "",
    }

    // provide mechanisms to extend defaults with the passed in arugments
    if (arguments[0] && typeof arguments[0] === "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    }

  } // constructor
  
  
  // Public Methods
  // Declare and define all the public 
  // methods over here
  MyPlugin.prototype.myMethod = function() {
  
    // open code goes here
  }
  



  // Private methods
  // Put all your private methods over here.
  // Utility method to extend defaults with user options
  function extendDefaults(source, properties) {
    var property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    } //for
    return source;
  } // extendDefaults

}());
