---
title: Commands
description: Rock language overview commands
---

Rock releases provide the `rock` binary, which is the only tool you need.  
To use `rock` commands, make sure that install directory is in your `PATH`.

Usage: `rock <command> [options]`.

| Command                 | Description                |
|-------------------------|----------------------------|
| [n, new](#new)          | Create a new package       |
| [c, check](#check)      | Check the program          |
| [b, build](#build)      | Build the program          |
| [r, run](#run)          | Build and run the program  |
| [h, help](#help)        | Print help information     |
| [v, version](#version)  | Print compiler version     |

### New
Create a new package in the current directory.

```bash
rock new sandbox
```

**Arguments:**
- `<name>` package name

**Options:**
- `--lib` set package kind to `lib`.
- `--bin` set package kind to `bin`.
- `--no-git` don't create git repository.

### Check
Check the program, print errors and warnings.

```bash
rock check
```

### Build
Build the program, save the output into `/build` directory.

```bash
rock build --release
```

**Options:**
- `--debug` build in debug mode.
- `--release` build in release mode.
- `--emit-llvm` save llvm module to a file.

### Run
Build and run the program, save the output into `/build` directory.

```bash
rock run --release -- arg1 arg2
```

**Options:**
- `--debug` build in debug mode.
- `--release` build in release mode.
- `--emit-llvm` save llvm module to a file.

**Positional Arguments:**
- `-- [args]` pass arguments to the compiled program when it is run.

### Help
Print help information about the usage.

```bash
rock help
```

### Version
Print compiler's semantic version.

```bash
rock version
```
