---
title: Commands
description: Rock language overview commands
---

Rock releases provide the `rock` binary, which is the only tool you need.  
To use `rock` commands, make sure that install directory is in your `PATH`.

Usage: `rock <command> [options]`.

| Command     | Description                |
|-------------|----------------------------|
| n, new      | Create a new package       |
| c, check    | Check the program          |
| b, build    | Build the program          |
| r, run      | Build and run the program  |
| h, help     | Print help information     |
| v, version  | Print compiler version     |

#### `new` command
Creates a new package in the current directory.

```bash
rock new sandbox
```

**Arguments:**
- `<name>` package name

**Options:**
- `--lib` set package kind to `lib`.
- `--bin` set package kind to `bin`.
- `--no-git` don't create git repository.

#### `check` command
Check the program, print errors and warnings.

```bash
rock check
```

#### `build` command
Build the program, save the output into `/build` directory.

```bash
rock build --release
```

**Options:**
- `--debug` build in debug mode.
- `--release` build in release mode.
- `--emit-llvm` save llvm module to a file.

#### `run` command
Build and run the program, save the output into `/build` directory.

```bash
rock run --release -- arg1 arg2
```

**Positional Arguments:**
- `-- [args]` pass arguments to the compiled program when it is run.

**Options:** same as build command.

#### `help` command
Print help information about the usage.

```bash
rock help
```

#### `version` command
Print compiler's semantic version.

```bash
rock version
```
