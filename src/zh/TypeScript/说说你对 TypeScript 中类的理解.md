---
title: 说说你对 TypeScript 中类的理解
lang: zh-CN
date: 2024-04-15 14:15:31
permalink: /TypeScript/Class/
category:
  - TypeScript
tag:
  - TypeScript
---

**类（Class）** 是 **面向对象** 程序设计 **（OOP，Object-Oriented Programming）** 实现信息封装的基础

类是一种用户定义的 **引用数据** 类型，也称类类型

传统的 面向对象语言 基本都是基于类的，JavaScript 基于 **原型** 的方式让开发者多了很多理解成本

在 ES6 之后，JavaScript 拥有了 **class** 关键字，虽然本质依然是 **构造函数**，但是使用起来已经方便了许多

但是 JavaScript 的 class 依然有一些特性还没有加入，比如 **修饰符** 和 **抽象类**

TypeScript 的 class 支持 面向对象 的 所有特性，比如 **类**、**接口** 等

## 普通用法

定义类的关键字为 **class**，后面紧跟类名，类可以包含以下几个模块（类的数据成员）：

- 字段：类里面声明的变量
- 构造函数：类实例化时调用，可以为类的对象分配内存
- 方法：对象要执行的操作

```typescript
class People {
  // 字段
  name: string;

  // 构造函数
  constructor(name: string) {
    this.name = name
  }

  // 方法
  getInfo(): void {
    console.log("姓名为:  " + this.name)
  }
}
```

## 继承用法

类的 **继承** 使用 **extends** 的关键字

```typescript
class People {
  talk(someThing: string) {
    console.log(someThing)
  }
}

class Man extends People {
  run() {
    console.log('The man ran ten meters');
  }
}

const aMan = new Man();

aMan.run(); // The man ran ten meters
aMan.talk("It's exhausting"); // It's exhausting
```

Man 是一个 **派生类**，它派生自 Man 基类，**派生类** 通常被称作 **子类**，**基类** 通常被称作 **超类**

Man 类继承了 People 类，因此实例 aMan 也能够使用 People 类 talk 方法

同样，类继承后，子类可以对父类的方法重新定义，这个过程称之为方法的重写

通过 **super关键字** 是对父类的直接引用，该关键字可以引用父类的属性和方法，如下：

```typescript
class People {
  talk(someThing: string) {
    console.log(someThing)
  }
}

class Man extends People {
  run() {
    console.log('The man ran ten meters');
  }
  talk() {
    super.talk("People don't want to speak anymore")
    console.log("Man don't want to speak anymore")
  }
}

const aMan = new Man();

aMan.run(); // The man ran ten meters
aMan.talk(); // People don't want to speak anymore    Man don't want to speak anymore
```

## 修饰符

### 公共修饰符 public 

可以被访问的类程序里定义的成员

```typescript
class People {
  public name: string = 'zhangsan';
}

class Man extends People {
  constructor() {
    super();
    console.log(this.name) // zhangsan
  }
}

const aMan = new Man();
console.log(aMan.name) // zhangsan
```

### 私有修饰符 private

只能够在该类的 **内部** 进行访问

```typescript
class People {
  public name: string = 'zhangsan';
  private age: number = 18;
}

class Man extends People {
  constructor() {
    super();
    console.log(this.name) // zhangsan
    console.log(this.age) // Property 'age' is private and only accessible within class 'People'
  }
}

const aMan = new Man();
console.log(aMan.name) // zhangsan
console.log(aMan.age) // Property 'age' is private and only accessible within class 'People'
```

### 受保护修饰符 protect

除了在该类的 **内部** 可以访问，还可以在 **子类** 中仍然可以访问

```typescript
class People {
  public name: string = 'zhangsan';
  private age: number = 18;
  protected sex: 'male' | 'female' = 'male'
}

class Man extends People {
  constructor() {
    super();
    console.log(this.name) // zhangsan
    console.log(this.age) // Property 'age' is private and only accessible within class 'People'
    console.log(this.sex) // male
  }
}

const aMan = new Man();

console.log(aMan.name) // zhangsan
console.log(aMan.age) // Property 'age' is private and only accessible within class 'People'
console.log(aMan.sex) // Property 'sex' is protected and only accessible within class 'People' and its subclasses.
```

### 只读修饰符 readonly

通过 **readonly** 关键字进行声明，只读属性必须在 **声明时** 或 构造函数里 被 **初始化**

```typescript
class People {
  readonly name: string;
  constructor(name: string) {
    this.name = name
  }
}

const people = new People('zhangsan')
people.name = 'lisi' //  Cannot assign to 'name' because it is a read-only property.
```

### 静态属性 static

这些属性存在于 **类本身** 上面而 不是 **类实例** 上，通过static进行定义，访问这些属性需要通过 **类型.静态属性** 的这种形式访问

```typescript
class People {
  static idCard: string = '111xxxxxx11'
  readonly name: string;
  constructor(name: string) {
    this.name = name
    console.log(this.idCard) // Property 'idCard' does not exist on type 'People'. Did you mean to access the static member 'People.idCard' instead?
  }
}

console.log(People.idCard) // 111xxxxxx11
```

### 抽象类 abstract

抽象类 做为 其它派生类 的 基类 使用，它们一般不会直接被实例化，不同于接口，抽象类可以包含成员的实现细节

**abstract** 关键字是用于定义 **抽象类** 和在抽象类内部定义 **抽象方法**

```typescript
abstract class People {
  abstract talk(): void
  run() {
    console.log('The people ran ten meters');
  }
}

class Man extends People {
  talk() {
    console.log("Man don't want to speak anymore");
  }
}

const aMan = new Man()
aMan.run() // The people ran ten meters
aMan.talk() // Man don't want to speak anymore
```

## 应用场景

除了日常借助 类 的特性完成日常业务代码，还可以将类（class）也可以作为接口，尤其在 **React** 工程中是很常用的，如下：

`export default class Carousel extends React.Component<Props, State> {}`

由于组件需要传入 **props** 的类型 **Props** ，同时有需要设置默认 **props** 即 **defaultProps**，这时候更加适合使用 class 作为接口
先声明一个类，这个类包含组件 **props** 所需的 **类型** 和 **初始值**：

```typescript
// props的类型
export default class Props {
  public children: Array<React.ReactElement<any>> | React.ReactElement<any> | never[] = []
  public speed: number = 500
  public height: number = 160
  public animation: string = 'easeInOutQuad'
  public isAuto: boolean = true
  public autoPlayInterval: number = 4500
  public afterChange: () => {}
  public beforeChange: () => {}
  public selesctedColor: string
  public showDots: boolean = true
}
```

当需要传入 props 类型的时候直接将 Props 作为接口传入，此时 Props 的作用就是接口，而当需要我们设置defaultProps初始值的时候，我们只需要:

```typescript
export default class Props {  }
const defaultProps = new Props()
```

Props 的实例就是 **defaultProps** 的 **初始值**，这就是 **class** 作为 **接口** 的实际应用，

用一个 class 起到了 **接口** 和 **设置初始值** 两个作用，方便统一管理，减少了代码量






