---
title: Module system
description: Rock language overview module system
---

### Packages
Rock packages consist of `src` directory and `Rock.toml` manifest.  
Directories can contain `.rock` files and nested directories.  
`Rock.toml` manifest will be covered in a [later chapter](#rock-manifest).

To create a new package use `rock` compiler binary from your terminal.  
Full specification of the `rock` command line tool will be covered in a [later chapter](#command-line-tool).
```bash
rock new example
cd example
rock run
```

### Modules
Modules are represented by a single `.rock` file.  
Executable binary packages are required to have `src/main.rock` file.  
Modules contain a list of **items**.  

### Items
Items are **private** by default.  
Their **visibility** can be changed via the `pub` keyword.

### Procedures
Procedures are used to perform computation at runtime,  
in some other languages they are called functions or methods.

Procedures are defined with the `proc` keyword:
```rs
proc main() -> s32 {
    return 0;
}
```

Input **parameters** are defined like this:
```rs
proc int_sum(x: s32, y: s32) -> s32 {
    return x + y;
}
```

Procedures that return `void` can omit the return type:
```rs
proc do_nothing() {
    return;
}
```

### Enums
Enums represent a set of integer constants.  
Each named enum field is called a **variant**.  
Variants can be assigned with an explicit value or auto incremented.  

Enums are defined with the `enum` keyword:
```rs
enum TileKind {
    Rock,  // 0
    Grass, // 1
    Water, // 2
    Forest = 10,
}
```

### Structs
Structs are record types in Rock.  
They represent a named collection of **fields**.  
Visibility rules do apply to struct fields.

Structs are defined with the `struct` keyword:
```rs
struct Vector2 {
    pub x: f32,
    pub y: f32,
}
```

### Constants
The constant's value must be **evaluatable at compile time**.  
Constants don't have a memory address and **cannot be referenced**.  
It's value cannot be changed at runtime.

Constants are defined with the `const` keyword:
```rs
const CHUNK_SIZE: u32 = 32;
const ENABLE_GFX: bool = true;
const ERROR_MESSAGE: []u8 = "out of bounds";
```

### Globals
The global's value must be **evaluatable at compile time**.  
Globals have a memory address and **can be referenced**.  
It's value can be changed at runtime, when declared with `mut` keyword.

Globals are defined with the `global` keyword:
```rs
global mut COUNTER: u64 = 0;
global CONSTANT_NUMBERS: [6]s32 = [4, 8, 15, 16, 23, 42];
```

### Imports
Imports are used to bring module and item names into scope.  
Only items declared with the `pub` keyword can be imported.  

Imports are defined with the `import` keyword.  
To specify the source package, use `package_name:`.  
By default, imports search in the **current package**.  
Import path is a list of `/` separated names.  
Import paths must end with the **module name**.

```go
// import `fs` from `core`
import core:fs;

// import `libc` and `printf` from `core`
import core:libc.{ printf }

proc example() {
    printf(c"directly use printf");
    libc.printf(c"access printf from libc");
}
```

Imported modules and items can be renamed.  
Underscore can be used to ignore imported modules.

```go title=""
// import `world2D` as `world`
// from current package path:
// src/engine/physics/world2D.rock
import engine/physics/world2D as world;

// import `printf` as `log`
// from `core` and ignore `libc` by renaming it to `_`
import core:libc as _.{ printf as log }

proc example() {
    log(c"creating the world\n");
    world.init(0.16);
    log(c"simulating the world\n");
    world.simulate();
    log(c"destroying the world\n");
    world.deinit();
}
```
