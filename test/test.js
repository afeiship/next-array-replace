var nx = require('next-js-core2');
require('../src/next-array-replace');

describe('next/arrayReplace', function() {
  test('nx.arrayReplace', function() {
    var arr = [[/a/g, 'A'], ['hello', 'world']];
    var str = 'aaa-bbb-1234 hello Fei!';
    var res = nx.arrayReplace(str, arr);

    expect(res).toBe('AAA-bbb-1234 world Fei!');
  });

  test('nx.replace', function() {
    var REPLACE_RE1 = /[A-Z]/g;
    var REPLACE_RE2 = /-/g;
    var DATE_SPACE = ' ';
    var DATE_DASH = '/';

    var arr = [
      [REPLACE_RE1, DATE_SPACE],
      [REPLACE_RE2, DATE_DASH]
    ];

    var str = '2017-10-19T02:10:42.903Z';
    var res = nx.arrayReplace(str, arr);

    expect(res).toBe('2017/10/19 02:10:42.903 ');
  });
});
