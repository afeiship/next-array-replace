var nx = require('next-js-core2');
require('../src/next-array-replace');

describe('Basic test', function() {
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

    var arr = [[REPLACE_RE1, DATE_SPACE], [REPLACE_RE2, DATE_DASH]];

    var str = '2017-10-19T02:10:42.903Z';
    var res = nx.arrayReplace(str, arr);

    expect(res).toBe('2017/10/19 02:10:42.903 ');
  });

  test('has escapd regexp', () => {
    var str =
      '<li>这一行 &amp;  &#34; </li>&#35;</ul>↵<!-- /wp:tss/list -->↵↵<!-- wp:paragraph -->↵<p></p>↵<!-- /wp:paragraph -->↵↵<!-- wp:&#35;paragraph -->↵<p>&#34;</p>';
    var regs = [[new RegExp('&#34;', 'g'), '"'], [new RegExp('&#35;', 'g'), '@']];

    var res = nx.arrayReplace(str, regs);
    expect(res).toBe(
      '<li>这一行 &amp;  " </li>@</ul>↵<!-- /wp:tss/list -->↵↵<!-- wp:paragraph -->↵<p></p>↵<!-- /wp:paragraph -->↵↵<!-- wp:@paragraph -->↵<p>"</p>'
    );
  });
});
