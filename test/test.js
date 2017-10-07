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

});
