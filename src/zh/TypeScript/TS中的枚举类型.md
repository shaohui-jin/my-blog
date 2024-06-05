---
title: TS中的枚举类型
lang: zh-CN
date: 2024-04-16 10:49:31
permalink: /TypeScript/Enum/
category:
  - TypeScript
tag:
  - TypeScript
---

**枚举** 是一个被 命名 的 **整型常数** 的集合，用于声明一组命名的常数，当一个变量有几种可能的取值时，可以将它定义为 **枚举类型**

通俗来说，**枚举** 就是 `一个对象的所有可能取值的集合`

在日常生活中也很常见，例如表示星期的 SUNDAY、MONDAY、TUESDAY、WEDNESDAY、THURSDAY、FRIDAY、SATURDAY 就可以看成是一个枚举

枚举的 说明与结构和 **联合** 相似，其形式为：

```
enum 枚举名{
    标识符①[=整型常数],
    标识符②[=整型常数],
    ...
    标识符N[=整型常数],
}枚举变量;
```

## 用法

通过 **enum 关键字** 进行定义

```typescript
enum Direction {  }
let d: Direction;
```

## 分类

### 数字枚举

当我们声明一个枚举类型时，虽然没有给它们赋值，但是它们的值其实是 **默认的数字类型**，而且 **默认从0开始** 依次累加

```typescript
enum Direction {
  Up,   // 值默认为 0
  Down, // 值默认为 1
  Left, // 值默认为 2
  Right // 值默认为 3
}
console.log(Direction.Up === 0); // true
console.log(Direction.Down === 1); // true
console.log(Direction.Left === 2); // true
console.log(Direction.Right === 3); // true
```

如果将 **第一个值** 进行赋值后，后面的值也会根据前一个值进行 **累加1**

```typescript
enum Direction {
  Up = 10,
  Down,
  Left,
  Right
}

console.log(Direction.Up, Direction.Down, Direction.Left, Direction.Right); // 10 11 12 13
```

### 字符串枚举

枚举类型的值其实也可以是 **字符串类型**

```typescript
enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

console.log(Direction['Right'], Direction.Up); // Right Up
```

如果设定了 **一个变量为字符串** 之后，后续的字段也 **必须赋值字符串**，否则报错

```typescript
enum Direction {
  Up = 'UP',
  Down, // Enum member must have initializer.
  Left, // Enum member must have initializer.
  Right // Enum member must have initializer.
}
```

### 异构枚举

即 将 **数字枚举** 和 **字符串枚举** 结合起来混合起来使用

```typescript
enum EnumType {
  No = 0,
  Yes = "YES",
}
```

通常情况下很少会使用异构枚举

现在一个枚举的案例如下：

```typescript
// 编译前
enum Direction {
  Up,
  Down,
  Left,
  Right
}

// 编译后
var Direction;
(function (Direction) {
  Direction[Direction["Up"] = 0] = "Up";
  Direction[Direction["Down"] = 1] = "Down";
  Direction[Direction["Left"] = 2] = "Left";
  Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
```

上述代码可以看到， Direction[Direction["Up"] = 0] = "Up"可以分成

```typescript
Direction["Up"] = 0
Direction[0] = "Up"
```

所以定义枚举类型后，可以通过 **正反映射** 拿到对应的值，如下：

```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right
}

console.log(Direction.Up === 0); // true
console.log(Direction[0]); // Up
```

并且 多处定义 的 枚举 是可以进行 **合并** 操作

```typescript
// 编译前
enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

enum Direction {
    Center = 1
}

// 编译后
var Direction;
(function (Direction) {
  Direction["Up"] = "Up";
  Direction["Down"] = "Down";
  Direction["Left"] = "Left";
  Direction["Right"] = "Right";
})(Direction || (Direction = {}));
(function (Direction) {
  Direction[Direction["Center"] = 1] = "Center";
})(Direction || (Direction = {}));
```

## 应用场景

就拿回生活的例子，后端返回的字段使用 **0 - 6** 标记对应的日期，这时候就可以使用枚举可提高代码可读性

```typescript
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
```
