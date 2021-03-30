# Patterns for String

## Check if the character is a digit

**Python**
```Python
if char.isDigit()
```
**JavaScript**\
Comparison
```JavaScript
if (char >= '0' && char <= '9')
```
isNaN
```JavaScript
!isNaN(Number(char))
```
RegEx
```JavaScript
if (/^\d+$/.test(char))
```

## Repeating a string

**Python**
```Python
repeated_string = string * num
```
**JavaScript**
```JavaScript
const repeatedString = string.repeat(num)
```

## Iterate through characters in a string

**Python**
```Python
for char in string:
```
**JavaScript**
```JavaScript
for (const char of string) {}
```
Functional
```JavaScript
[...string].forEach(char => console.log(char))
```
Or
```JavaScript
[...string].map(char => console.log(char))
```

## Concatenate at the end of the string

**Python**
```Python
string += char
```
**JavaScript**\
Operator shorthand
```JavaScript
string += char
```
Concat() method
```JavaScript

```