---
title: Manifest
description: Rock language overview manifest
---

Manifest is a `Rock.toml` file located in the root of each package.  
It contains package metadata used to compile and build the project.  

### `[package]` section

| Key                          | Description          | Required |
|------------------------------|----------------------|----------|
| [name](#name)                | package name         | ✔        |
| [kind](#kind)                | package type         | ✔        |
| [version](#version)          | semantic version     | ✔        |
| [owner](#owner)              | repository owner     |          |
| [authors](#authors)          | list of authors      |          |
| [description](#description)  | package description  |          |

#### `[package]` example

```toml
[package]
name = "some_lib"
kind = "lib"
version = "0.0.1"
owner = "main_owner"
authors = ["main_owner", "contributor"]
description = "some library for something"
```

#### name
Package name is an identifier used to refer to the package.  
The compiler, by default, will use it to name build artifacts.

**Package name must follow these rules:**
- length from 1 up to 32 characters
- contains only `a-z`, `0-9` and `_`
- cannot start with `_`

#### kind
Executable packages are built into binaries.  
Library packages can be used as dependencies.

**Package kinds:**
- `bin` executable package
- `lib` library package

#### version
[Semantic version](https://semver.org/) of the package.  
Used for dependency resolution.

#### owner
Repository owner's Github username.  
Used for publishing packages to [rock-index](https://github.com/nickk-dv/rock-index).

#### authors
Package author list.  
Used to credit the project creators.

#### description
Package description.  
Short explanation of the package purpose.

### `[build]` section

| Key                            | Description                  | Required |
|--------------------------------|------------------------------|----------|
| [bin_name](#bin_name)          | build artifact name          |          |
| [nodefaultlib](#nodefaultlib)  | don't link default libraries |          |
| [lib_paths](#lib_paths)        | library search paths         |          |
| [links](#links)                | linked library names         |          |

#### `[build]` example

```toml
[build]
bin_name = "new_name"
nodefaultlib = false
lib_paths = ["./lib/windows", "./lib/linux"]
links = ["raylib.dll", "raylib.so"]
```

#### bin_name
Overrides the package name for build artifacts.  
The compiler will use it instead of the `[package]` name.

#### nodefaultlib
Disables linking against default libraries.  
For example, on Windows, this will disable linking against `libcmt.lib`.

:::caution
This key may be changed or removed.
:::

#### lib_paths
Defines library search paths used by the linker.

:::caution
This key may be changed or removed.
:::

#### links
Defines the names of libraries to be linked by the linker.

:::caution
This key may be changed or removed.
:::

### `[dependencies]` section
Specifies the packages that this package depends on.  
Each dependency is uniquely named and has the required version.

```toml
[dependencies]
some_lib = "0.4.3"
other_lib = "0.5.2"
example_lib = "1.0.0"
```

:::caution
Dependency format may change.
:::
