---
title: TS中的数据类型
lang: zh-CN
date: 2024-04-17 16:22:21
permalink: /TypeScript/DataType/
category:
  - TypeScript
tag:
  - TypeScript
---

typescript 和 javascript **几乎一样**，拥有相同的数据类型，另外在 javascript 基础上提供了 **更加实用的类型** 供开发使用

在开发阶段，可以为 明确的变量定义为 某种类型，这样 typescript 就能在编译阶段进行 **类型检查**，当类型不合符预期结果的时候则会出现错误提示

## typescript 的数据类型

- boolean（布尔类型）
- number（数字类型）
- string（字符串类型）
- array（数组类型）
- tuple（元组类型）
- [enum（枚举类型）](/TypeScript/Enum/)
- any（任意类型）
- null 和 undefined 类型
- void 类型
- never 类型
- object 对象类型


### 布尔类型 boolean

```typescript
let flag:boolean = true;
// flag = 123; // 错误
flag = false;  //正确
```

### 数字类型 number

typescript 的 数值类型 都是 **浮点数**，可支持**二进制**、**八进制**、**十进制**和**十六进制**

```typescript
let num:number = 123;
// num = '456'; // Type 'string' is not assignable to type 'number'.
num = 456;  //正确
// 进制表示：
let decLiteral: number = 6; // 十进制 6
let hexLiteral: number = 0xf00d; // 十六进制 61453
let binaryLiteral: number = 0b1010; // 二进制 10
let octalLiteral: number = 0o744; // 八进制 484
```

### 字符串类型 string

可以使用 **双引号** 或 **单引号** 表示字符串

```typescript
let str: string = 'this is ts';
str = 'test';
let name: string = `Gene`; // 注意编辑器存在部分bug，name会报错，跟window的name冲突
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }`
```

### 数组类型 array

通过 **[]** 进行包裹，有两种写法

```typescript
// 方式一：元素类型后面接上 []
let arr1: string[] = ['12', '23'];
arr1 = ['45', '56'];

// 方式二：使用数组泛型，Array<元素类型>  
let arr2: Array<number> = [1, 2];
arr2 = [45, 56];
```

### 元祖类型 tuple

表示一个 **已知元素数量** 和 **类型** 的数组，各元素的 **类型可以不相同**

赋值的 **类型**、**位置**、**个数需要**和定义（声明）的一致

```typescript
let tupleArr: [number, string, boolean];
tupleArr = [12, '34', true];
typleArr = [12, '34'] // Cannot find name 'typleArr'
```

### 枚举类型 enum

enum 类型是对 JavaScript 标准数据类型的一个补充

```typescript
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

### 任何类型 any

可以指定任何类型的值，在 **编程阶段** 还不清楚类型的变量指定一个类型，不希望 **类型检查器** 对这些值进行检查，而是直接让它们通过编译阶段的检查

使用 any 类型允许被赋值为 **任意类型**，甚至可以调用其 **属性**、**方法**

```typescript
let num: any = 123;
num = 'str';
num = true;
// 定义存储各种类型数据的数组时，示例代码如下：
let arrayList: any[] = [1, false, 'fine'];
arrayList[1] = 100;
```

### null 和 和 undefined

在 JavaScript 中 null表示 "**什么都没有**"，是一个只有一个值的特殊类型，表示一个**空对象引用**，而 undefined 表示一个 **没有设置值** 的 **变量**

默认情况下 **null** 和 **undefined** 是所有类型的 **子类型**，`就是说你可以把 null和 undefined 赋值给 number 类型的变量`

```typescript
let num: number | undefined; // 数值类型 或者 undefined
console.log(num); // undefined
num = 123;
console.log(num); // 123
num = null;
console.log(num); // null
num = undefined;
console.log(num); // undefined
```

但是 ts 配置了 **--strictNullChecks** 标记，null 和 undefined 只能赋值给 **void** 和 **它们各自**

### 无返回值类型 void

用于标识方法返回值的类型，表示该方法没有返回值

```typescript
function hello(): void {
  alert("Hello Ts");
}
```

### 不会出现类型 never

never是其他类型（包括null和 undefined）的子类型，可以赋值给任何类型，代表 **从不会出现的值**

但是没有类型是 never 的子类型，这意味着声明 never 的变量只能被 never 类型所赋值

never 类型一般用来指定 **抛出异常**、**无限循环**

```typescript
let a: never;
a = 123; // Type 'number' is not assignable to type 'never'.

a = (() => { // 正确的写法
  throw new Error('错误');
})()

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}
```

### 对象类型 object

```typescript
let obj: object;
obj = { name: 'ShiLianAn', age: 27 };
```

### 总而言之

和 javascript 基本一致，也分成：

- 基本类型
- 引用类型

在基础类型上，typescript 增添了 **void**、**any**、**emum** 等原始类型
