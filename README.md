# next-array-replace
> Multiple replace for object.

## install:
```bash
npm install -S afeiship/next-array-replace --registry=https://registry.npm.taobao.org
```

## usage:
```js
var arr= [
  [/a/g,'A'],
  ['hello','world']
];
var str = 'aaa-bbb-1234 hello Fei!';
var res = nx.replace( str, arr);

// AAA-bbb-1234 world Fei!
```
