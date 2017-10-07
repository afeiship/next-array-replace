(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.replace = function (inString, inArray) {
    var i, length = inArray.length;
    for (i = 0; i < length; i++) {
      inString = inString.replace(inArray[i][0], inArray[i][1]);
    }
    return inString;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.replace;
  }

}());
