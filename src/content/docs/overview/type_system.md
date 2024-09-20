---
title: Type system
description: Rock language overview type system
---

Rock is statically and distinctly typed.  
Rock types can be read from left to right.

### Basic types

| Type        | C Equivalent          | Description                    |
|-------------|-----------------------|--------------------------------|
| `s8`        | `int8_t`              | 8-bit  signed integer          |
| `s16`       | `int16_t`             | 16-bit signed integer          |
| `s32`       | `int32_t`             | 32-bit signed integer          |
| `s64`       | `int64_t`             | 64-bit signed integer          |
| `ssize`     | `intptr_t`            | pointer-sized signed integer   |
| `u8`        | `uint8_t`             | 8-bit  unsigned integer        |
| `u16`       | `uint16_t`            | 16-bit unsigned integer        |
| `u32`       | `uint32_t`            | 32-bit unsigned integer        |
| `u64`       | `uint64_t`            | 64-bit unsigned integer        |
| `usize`     | `size_t`              | pointer-sized unsigned integer |
| `f32`       | `float`               | 32-bit floating point: IEEE-754-2008 binary32 |
| `f64`       | `double`              | 64-bit floating point: IEEE-754-2008 binary64 |
| `bool`      | `bool`                | true or false                  |
| `char`      | (none)                | 32-bit Unicode code point      |
| `rawptr`    | `void*`               | type-erased pointer            |
| `void`      | `void`                | zero-sized non-value type      |
| `never`     | (none)                | represents diverging control flow |
