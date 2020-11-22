# next-array-replace
> Multiple replace for array.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-array-replace
```

## usage
```js
import '@jswork/next-array-replace';

const arr= [
  [/a/g,'A'],
  ['hello','world']
];
const str = 'aaa-bbb-1234 hello Fei!';
const res = nx.arrayReplace( str, arr);

// AAA-bbb-1234 world Fei!
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-array-replace/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-array-replace
[version-url]: https://npmjs.org/package/@jswork/next-array-replace

[license-image]: https://img.shields.io/npm/l/@jswork/next-array-replace
[license-url]: https://github.com/afeiship/next-array-replace/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-array-replace
[size-url]: https://github.com/afeiship/next-array-replace/blob/master/dist/next-array-replace.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-array-replace
[download-url]: https://www.npmjs.com/package/@jswork/next-array-replace
