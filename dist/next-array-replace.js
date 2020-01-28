/*!
 * name: @feizheng/next-array-replace
 * description: Multiple replace for array.
 * url: https://github.com/afeiship/next-array-replace
 * version: 1.0.0
 * date: 2020-01-28 23:03:48
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

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

//# sourceMappingURL=next-array-replace.js.map
