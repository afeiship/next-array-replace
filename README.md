# next-array-replace
> Multiple replace for array.

## installation
```bash
npm install -S @feizheng/next-array-replace
```

## usage
```js
import '@feizheng/next-array-replace';

const arr= [
  [/a/g,'A'],
  ['hello','world']
];
const str = 'aaa-bbb-1234 hello Fei!';
const res = nx.arrayReplace( str, arr);

// AAA-bbb-1234 world Fei!
```
