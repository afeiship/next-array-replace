/*!
 * name: @jswork/next-array-replace
 * description: Multiple replace for array.
 * homepage: https://github.com/afeiship/next-array-replace
 * version: 1.0.0
 * date: 2020-11-17T09:50:14.602Z
 * license: MIT
 */

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
