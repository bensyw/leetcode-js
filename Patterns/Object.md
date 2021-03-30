# Patterns for Object

## Use Object as a substitute for Tuple in Python
**Python**
```Python
(x, y) = (1, 2)
```
**JavaScript**\
Use Object shorthand (name of the key is the same as the variable name passed in for the property)
```JavaScript
const {x, y} = (1, 2)
```

## Destructuring and renaming in the same line
**Python**\
Referred to as 'unpacking' in Python
```Python
(x, y) = (a, b)
```
**JavaScript**\
```JavaScript
const {
    a: x,
    b: y
} = destructuredObject
```
