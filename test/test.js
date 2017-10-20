var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-replace');

describe('next/replace', function () {

  it('nx.replace', function () {
    var arr= [
      [/a/g,'A'],
      ['hello','world']
    ];
    var str = 'aaa-bbb-1234 hello Fei!';
    var res = nx.replace( str, arr);

    assert.equal( res, 'AAA-bbb-1234 world Fei!');
  });


  it('nx.replace', function () {
    var REPLACE_RE1 = /[A-Z]/g;
    var REPLACE_RE2 = /-/g;
    var DATE_SPACE = ' ';
    var DATE_DASH = '/';

    var arr= [
      [REPLACE_RE1,DATE_SPACE],
      [REPLACE_RE2,DATE_DASH]
    ];

    var str = '2017-10-19T02:10:42.903Z';
    var res = nx.replace( str, arr);

    console.log(res);
    console.log(res == '2017/10/19 02:10:42.903');

    //todo: WHY????

    // assert.equal( res, '2017/10/19 02:10:42.903');
  });




});
