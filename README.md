# next-replace
> Multiple replace for object.


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
