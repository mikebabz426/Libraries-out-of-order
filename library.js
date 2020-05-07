(function () {
  var libraryStorage = {};
  var argumentStorage = [];

  function librarySystem(libraryName, dependencyArray, callback) {
    if (arguments.length > 1) {
      if (dependencyArray.length === 0) {
        libraryStorage[libraryName] = callback();
      } else {
        for (var i = 0; i < dependencyArray.length; i++) {
          argumentStorage[i] = libraryStorage[dependencyArray[i]];
        }

        libraryStorage[libraryName] = callback.apply(this, argumentStorage);
      }
    } else {
      return libraryStorage[libraryName];
    }
  }
  window.librarySystem = librarySystem;
})();
