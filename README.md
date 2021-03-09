## Patterns for hashtables

### Equivalent of Python dictionary in JavaScript

Map() is the equivalent data structure to Python dictionary
```JavaScript
const map = new Map()
```

Check if key is in map. 
``` JavaScript
if (map.has(key)) {}
```
Or
``` JavaScript
if (key in map) {}
```

Get value by key
``` JavaScript
map.get(key)
```
Or
``` JavaScript
map[key]
```

Set the value of key
``` JavaScript
map.set(key, value)
```
Or
``` JavaScript
map[key] = value
```

### Building a adjacency list from an array
```JavaScript
const graph = new Map()
for (const [u, v] of prerequisites) {
    if (graph.has(v)) {
        graph.get(v).push(u)
    } else {
        graph.set(v, [u])
    }
}
```

## Patterns for initializing array
### Copy by reference
In Python
```Python
dp = [0] * n
```
In JavaScript
```JavaScript
const dp = Array(n).fill(0)
```
### Shallow copy
In Python
```Python
dp = [[0 for _ in range(n)] for _ in range(m)]
```
In JavaScript
```JavaScript
const dp = Array.from({length: m}, element => Array(n).fill(0))
```
Using ES6 Feature
``` JavaScript
const dp = [...new Array(m)].map(_ => Array(n).fill(0))
```
Read more about creating array [here](https://www.freecodecamp.org/news/https-medium-com-gladchinda-hacks-for-creating-javascript-arrays-a1b80cb372b/)

### Array of Set/Object

**Must use the shallow copy method, otherwise all set would change at the same time as they are copied by reference**

**Example: Soduku Solver/Valid Soduku**

In Python
```Python
row_set = [set() for _ in range(9)]
```
In JavaScript
```JavaScript
const rowSet = Array.from({length: m}, element => new Set())
```