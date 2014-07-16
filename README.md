# Multimap - Map which Allow Multiple Values for the same Key

## Install

```bash
npm install multimap --save
```

## Usage


If you'd like to use native version when it exists and fallback to polyfill if it doesn't, but without implementing `Map` on global scope, do:

```javascript
var Multimap = require('multimap');
var m = new Multimap();
```

If `Multimap.Map` is set, `Multimap` will use the `Map` as inner store, that means Object can be used as key. 

```javascript
var Multimap = require('multimap');

// if harmony is on
Multimap.Map = Map;

// or if you are using es6-shim
Multimap.Map = ShimMap;

var m = new Multimap();
var key = {};
m.set(key, 'one');

```

Otherwise, an object will be used, all the keys will be transformed into string.

#### API

Following shows how to use `Multimap`:

```javascript
var Multimap = require('multimap');

var map = new Multimap([['a', 'one'], ['b', 1], ['a', 'two'], ['b', 2]]);

map.size;                 // 4

map.get('a');             // ['one', 'two']
map.get('b');             // [1, 2]

map.has('a');             // true
map.has('foo');           // false

map.has('a', 'one');      // true
map.has('b', 3);          // false

map.set('a', 'three');
map.size;                 // 5
map.get('a');             // ['one', 'two', 'three']

map.set('b', 3, 4);
map.size;                 // 7

map.delete('a', 'three'); // true
map.delete('x');          // false
map.delete('a', 'four');  // false
map.delete('b');          // true

map.size;                 // 2

map.set('b', 1, 2);
map.size;                 // 4


map.forEach(function (value, key) {
  // iterates { 'a', 'one' }, { 'a', 'two' }, { 'b', 1 }, { 'b', 2 } 
});

map.forEachEntry(function (entry, key) {
  // iterates { 'a', ['one', 'two'] }, { 'b', [1, 2] } 
});


var keys = map.keys();      // iterator with ['a', 'b']
keys.next().value;          // 'a'
var values = map.values();  // iterator ['one', 'two', 1, 2]

map.clear();                // undefined
map.size;                   // 0
```


## License

(The MIT License)

Copyright (c) 2013, Villa.Gao <jky239@gmail.com>;
All rights reserved.
