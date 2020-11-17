(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.arrayReplace = function(inString, inArray) {
    if (!inString) return inString;
    for (var i = 0; i < inArray.length; i++) {
      inString = inString.replace(inArray[i][0], inArray[i][1]);
    }
    return inString;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.arrayReplace;
  }
})();
