---
title: Lexical elements
description: Rock language overview lexical elements
---

### Comments
Line comments begin with `//`.  
Multi-line block comments begin with `/*` and end with `*/`.
```rs
// line comment
/* block comment */
/*
    /* block comments can be nested */
*/
```

### Numbers
Numeric literals are untyped.  
Their type is determined during typechecking.
```rs
2, 1024            // integer (decimal)
1_000_000          // underscores can be used
0b10, 0b1000_1010  // integer (binary)
0o17, 0o755_417    // integer (octal)
0xFA, 0xFA34_CA9B  // integer (hexadecimal)
37.0, 1.60e-19     // floating point
```

### Characters
Character literals represent 32-bit Unicode code points:
```go
`r`, `2`, `\n`, `🔥`
```

### Strings
String literals are UTF-8 encoded byte sequences.  
Rock provides a flexible way to define string literals:
```go
"this is a string \n"      // parse escape sequences
`this is a raw string \n`  // don't parse escape sequences
c"this is a C string"      // include null terminator
```

Multi-line strings are represented by consecutive string literals:
```go
"1. first line"            // new line `\n` will be
"2. second line"           // inserted after each line,
"3. third line"            // except the last one.
```

String modifiers can be used together.  
For example, we can define a raw C string:
```go
c`C:\\Some\\Random\\WindowsPath.txt`
```

### Escape sequences
Escape sequences are special character combinations used in  
string or character literals to represent non-printable or special characters.

| Sequence     | Description                    |
|--------------|--------------------------------|
| `\n`         | newline                        |
| `\r`         | carriage return                |
| `\t`         | tab                            |
| `\'`         | single quote                   |
| `\"`         | double quote                   |
| `\\`         | backslash                      |
| `\x{NNNNNN}` | hexadecimal Unicode code point |

### Built-in constants
Keywords are reserved for commonly used constants.  
`null` does not behave like `nil` or `undefined` in other languages and requires an explicit cast.  
`null` is mostly used for `C` interop and working with `void*` equivalent `rawptr` type.
```c#
null         // null raw pointer
true, false  // boolean constants
```
